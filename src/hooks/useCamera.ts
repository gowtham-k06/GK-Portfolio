import { useState, useEffect, useRef, useCallback } from 'react';
import { CameraState, ZoneId } from '../types/world';
import { WORLD_ZONES } from '../data/worldData';

interface UseCameraOptions {
  minZoom?: number;
  maxZoom?: number;
}

export function useCamera(options: UseCameraOptions = {}) {
  const { minZoom = 0.25, maxZoom = 2.4 } = options;

  // Actual animated camera state
  const [camera, setCamera] = useState<CameraState>({ x: 0, y: 0, zoom: 1 });
  // Target camera state for physics interpolation
  const targetRef = useRef<CameraState>({ x: 0, y: 0, zoom: 1 });
  const currentRef = useRef<CameraState>({ x: 0, y: 0, zoom: 1 });

  // Velocity for momentum/inertia
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const lastDragPos = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const [activeZoneId, setActiveZoneId] = useState<ZoneId>('studio');

  // Mouse parallax offset (normalized -1 to 1)
  const [mouseParallax, setMouseParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Spacebar hold state
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const spacePressedRef = useRef(false);

  // Active touch pointers for multi-touch pinch
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef<number>(1);

  // RequestAnimationFrame loop for silky smooth lerp + inertia
  useEffect(() => {
    let animId: number;

    const tick = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Damped momentum if not dragging
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current.vx) > 0.05 || Math.abs(velocityRef.current.vy) > 0.05) {
          target.x += velocityRef.current.vx;
          target.y += velocityRef.current.vy;
          velocityRef.current.vx *= 0.90;
          velocityRef.current.vy *= 0.90;
        } else {
          velocityRef.current.vx = 0;
          velocityRef.current.vy = 0;
        }
      }

      // Smooth lerp towards target
      const lerpSpeed = 0.16;
      const dx = (target.x - current.x) * lerpSpeed;
      const dy = (target.y - current.y) * lerpSpeed;
      const dz = (target.zoom - current.zoom) * lerpSpeed;

      const hasMovement = Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01 || Math.abs(dz) > 0.0005;

      if (hasMovement) {
        current.x += dx;
        current.y += dy;
        current.zoom += dz;

        setCamera({
          x: current.x,
          y: current.y,
          zoom: current.zoom
        });
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Smoothly fly camera to center a specific world position
  const flyTo = useCallback((worldX: number, worldY: number, targetZoom?: number, zoneId?: ZoneId) => {
    // Center world point (worldX, worldY) in viewport:
    // When camera is at (-worldX * zoom, -worldY * zoom), the world point (worldX, worldY) is at screen center!
    const newZoom = targetZoom !== undefined ? Math.min(Math.max(targetZoom, minZoom), maxZoom) : targetRef.current.zoom;
    
    targetRef.current = {
      x: -worldX * newZoom,
      y: -worldY * newZoom,
      zoom: newZoom
    };

    velocityRef.current = { vx: 0, vy: 0 };
    if (zoneId) {
      setActiveZoneId(zoneId);
    }
  }, [minZoom, maxZoom]);

  // Fly to zone by ID
  const flyToZone = useCallback((zoneId: ZoneId) => {
    const zone = WORLD_ZONES.find(z => z.id === zoneId);
    if (zone) {
      flyTo(zone.x, zone.y, zone.targetZoom, zone.id);
    }
  }, [flyTo]);

  // Zoom at specific screen coordinates (Figma exact cursor zoom)
  const zoomAtPoint = useCallback((screenX: number, screenY: number, zoomDelta: number) => {
    const currentZoom = targetRef.current.zoom;
    const factor = Math.exp(-zoomDelta * 0.002);
    const newZoom = Math.min(Math.max(currentZoom * factor, minZoom), maxZoom);
    if (newZoom === currentZoom) return;

    // Viewport center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    // Relative to screen center
    const sx = screenX - cx;
    const sy = screenY - cy;

    // Canvas formula to keep point under cursor invariant:
    const target = targetRef.current;
    const newX = sx - (sx - target.x) * (newZoom / currentZoom);
    const newY = sy - (sy - target.y) * (newZoom / currentZoom);

    targetRef.current = {
      x: newX,
      y: newY,
      zoom: newZoom
    };
  }, [minZoom, maxZoom]);

  // Handle pointer down (mouse or touch)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only drag with left click or touch
    if (e.pointerType === 'mouse' && e.button !== 0 && !spacePressedRef.current) return;

    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 1) {
      setIsDragging(true);
      isDraggingRef.current = true;
      velocityRef.current = { vx: 0, vy: 0 };
      lastDragPos.current = { x: e.clientX, y: e.clientY, time: performance.now() };
    } else if (activePointers.current.size === 2) {
      // Begin pinch
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinchStartDist.current = dist;
      pinchStartZoom.current = targetRef.current.zoom;
    }
  }, []);

  // Handle pointer move
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // Track mouse for subtle parallax
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    setMouseParallax({
      x: (e.clientX - cx) / cx,
      y: (e.clientY - cy) / cy
    });

    if (!activePointers.current.has(e.pointerId)) return;
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 1 && isDraggingRef.current) {
      const now = performance.now();
      const dt = Math.max(now - lastDragPos.current.time, 16);
      const dx = e.clientX - lastDragPos.current.x;
      const dy = e.clientY - lastDragPos.current.y;

      targetRef.current.x += dx;
      targetRef.current.y += dy;

      // Track velocity for throw inertia
      velocityRef.current = {
        vx: (dx / dt) * 14,
        vy: (dy / dt) * 14
      };

      lastDragPos.current = { x: e.clientX, y: e.clientY, time: now };
    } else if (activePointers.current.size === 2 && pinchStartDist.current) {
      // Multi-touch pinch zoom
      const pts = Array.from(activePointers.current.values());
      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const scale = currentDist / pinchStartDist.current;
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;

      zoomAtPoint(midX, midY, (1 - scale) * 200);
    }
  }, [minZoom, maxZoom, zoomAtPoint]);

  // Handle pointer up/cancel
  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);

    if (activePointers.current.size === 0) {
      setIsDragging(false);
      isDraggingRef.current = false;
      pinchStartDist.current = null;
    } else if (activePointers.current.size === 1) {
      // Re-anchor single finger drag
      const remaining = activePointers.current.values().next().value;
      if (remaining) {
        lastDragPos.current = { x: remaining.x, y: remaining.y, time: performance.now() };
      }
      pinchStartDist.current = null;
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space' && !e.repeat) {
        setIsSpacePressed(true);
        spacePressedRef.current = true;
      }

      // Keys 1 to 8 to jump to zones
      const keyNum = parseInt(e.key, 10);
      if (keyNum >= 1 && keyNum <= 8) {
        const zone = WORLD_ZONES.find(z => z.index === keyNum);
        if (zone) {
          flyTo(zone.x, zone.y, zone.targetZoom, zone.id);
        }
      }

      // Arrow keys / WASD to pan
      const panStep = 80;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        targetRef.current.x += panStep;
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        targetRef.current.x -= panStep;
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        targetRef.current.y += panStep;
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        targetRef.current.y -= panStep;
      }

      // Zoom keys
      if (e.key === '=' || e.key === '+') {
        zoomAtPoint(window.innerWidth / 2, window.innerHeight / 2, -150);
      } else if (e.key === '-' || e.key === '_') {
        zoomAtPoint(window.innerWidth / 2, window.innerHeight / 2, 150);
      } else if (e.key === '0') {
        // Reset zoom to 100%
        targetRef.current.zoom = 1;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
        spacePressedRef.current = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [flyTo, zoomAtPoint]);

  return {
    camera,
    isDragging,
    isSpacePressed,
    mouseParallax,
    activeZoneId,
    flyTo,
    flyToZone,
    zoomAtPoint,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp
  };
}
