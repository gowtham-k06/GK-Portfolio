import React, { useRef, useEffect, useState } from 'react';
import { CameraState, WorldZone, ZoneId } from '../../types/world';
import { WORLD_ZONES, CONNECTOR_LINKS } from '../../data/worldData';
import { GridBackground } from './GridBackground';
import { Camera } from './Camera';
import { ParallaxLayer } from './ParallaxLayer';
import { ConnectorsLayer } from './ConnectorsLayer';
import { WorldObject } from './WorldObject';
import { EnvironmentalAccents } from '../objects/EnvironmentalAccents';

// Import Object Components
import { StudioDesk } from '../objects/StudioDesk';
import { AboutNotebook } from '../objects/AboutNotebook';
import { ExperienceTimeline } from '../objects/ExperienceTimeline';
import { SkillsToolbox } from '../objects/SkillsToolbox';
import { CaseStudiesBoards } from '../objects/CaseStudiesBoards';
import { ResumeDocument } from '../objects/ResumeDocument';
import { SocialsLinks } from '../objects/SocialsLinks';
import { ContactBoard } from '../objects/ContactBoard';

interface CanvasProps {
  camera: CameraState;
  isDragging: boolean;
  isSpacePressed: boolean;
  mouseParallax: { x: number; y: number };
  activeZoneId: ZoneId;
  onSelectZone: (zoneId: ZoneId) => void;
  onZoomAtPoint: (screenX: number, screenY: number, delta: number) => void;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  camera,
  isDragging,
  isSpacePressed,
  mouseParallax,
  activeZoneId,
  onSelectZone,
  onZoomAtPoint,
  onPointerDown,
  onPointerMove,
  onPointerUp
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<ZoneId | null>(null);

  // Wheel listener with passive: false to prevent browser default zoom
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      onZoomAtPoint(e.clientX, e.clientY, e.deltaY);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [onZoomAtPoint]);

  // Cursor style
  const cursorClass = isDragging
    ? 'canvas-grabbing'
    : isSpacePressed
    ? 'canvas-grab'
    : 'cursor-default';

  // Render object body based on zone id
  const renderZoneBody = (zone: WorldZone) => {
    switch (zone.id) {
      case 'studio':
        return <StudioDesk zone={zone} />;
      case 'about':
        return <AboutNotebook zone={zone} />;
      case 'experience':
        return <ExperienceTimeline zone={zone} />;
      case 'skills':
        return <SkillsToolbox zone={zone} />;
      case 'projects':
        return <CaseStudiesBoards zone={zone} />;
      case 'resume':
        return <ResumeDocument zone={zone} />;
      case 'socials':
        return <SocialsLinks zone={zone} />;
      case 'contact':
        return <ContactBoard zone={zone} />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-screen h-screen overflow-hidden select-none touch-none ${cursorClass}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: 'none' }}
    >
      {/* 1. Dynamic Infinite Background Grid with parallax depth */}
      <GridBackground camera={camera} parallax={mouseParallax} />

      {/* 2. Main Camera Viewport */}
      <Camera camera={camera}>
        {/* Parallax Midground: Connectors & Environmental Accents */}
        <ParallaxLayer depth={-0.03} mouseParallax={mouseParallax}>
          <ConnectorsLayer
            connectors={CONNECTOR_LINKS}
            zones={WORLD_ZONES}
            hoveredZoneId={hoveredZoneId}
            activeZoneId={activeZoneId}
            onSelectZone={onSelectZone}
          />
        </ParallaxLayer>

        {/* Parallax Plane 0: Primary World Objects */}
        <ParallaxLayer depth={0} mouseParallax={mouseParallax}>
          {WORLD_ZONES.map((zone) => (
            <WorldObject
              key={zone.id}
              zone={zone}
              isActive={activeZoneId === zone.id}
              isHovered={hoveredZoneId === zone.id}
              onSelect={(z) => onSelectZone(z.id)}
              onHover={(id) => setHoveredZoneId(id)}
              showTape={zone.id === 'about' || zone.id === 'contact'}
            >
              {renderZoneBody(zone)}
            </WorldObject>
          ))}
        </ParallaxLayer>

        {/* Parallax Foreground: Floating Cursors & Dimension Guides */}
        <ParallaxLayer depth={0.06} mouseParallax={mouseParallax}>
          <EnvironmentalAccents />
        </ParallaxLayer>
      </Camera>
    </div>
  );
};
