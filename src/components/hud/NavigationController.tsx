import React, { useState } from 'react';
import { CameraState, ZoneId } from '../../types/world';
import { WORLD_ZONES, WORLD_BOUNDS } from '../../data/worldData';
import {
  ZoomIn,
  ZoomOut,
  Compass,
  Keyboard,
  Home
} from 'lucide-react';

interface NavigationControllerProps {
  camera: CameraState;
  activeZoneId: ZoneId;
  onFlyToZone: (zoneId: ZoneId) => void;
  onFlyTo: (x: number, y: number, zoom?: number) => void;
  onZoomAtPoint: (x: number, y: number, delta: number) => void;
}

export const NavigationController: React.FC<NavigationControllerProps> = ({
  camera,
  activeZoneId,
  onFlyToZone,
  onFlyTo,
  onZoomAtPoint
}) => {
  const [showMinimap, setShowMinimap] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  const zoomPercent = Math.round(camera.zoom * 100);
  const coordX = Math.round(-camera.x / camera.zoom);
  const coordY = Math.round(-camera.y / camera.zoom);

  // Minimap dimensions
  const mapW = 160;
  const mapH = 110;
  const worldW = WORLD_BOUNDS.width;
  const worldH = WORLD_BOUNDS.height;

  // Viewport rectangle in minimap coordinates
  const vpW = typeof window !== 'undefined' ? (window.innerWidth / camera.zoom / worldW) * mapW : 30;
  const vpH = typeof window !== 'undefined' ? (window.innerHeight / camera.zoom / worldH) * mapH : 20;

  const vpX = ((coordX - WORLD_BOUNDS.minX) / worldW) * mapW - vpW / 2;
  const vpY = ((coordY - WORLD_BOUNDS.minY) / worldH) * mapH - vpH / 2;

  const handleMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const targetWorldX = WORLD_BOUNDS.minX + (clickX / mapW) * worldW;
    const targetWorldY = WORLD_BOUNDS.minY + (clickY / mapH) * worldH;

    onFlyTo(targetWorldX, targetWorldY, camera.zoom);
  };

  return (
    <div className="pointer-events-none select-none">
      {/* Top Left: Spatial Coordinates & Workspace Badge */}
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2 pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs flex items-center gap-2.5 text-xs font-mono">
          <div className="w-2 h-2 rounded-full bg-[#0D99FF] animate-pulse" />
          <span className="font-semibold text-slate-800">GK STUDIO</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">X: {coordX}px</span>
          <span className="text-slate-500">Y: {coordY}px</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#0D99FF] font-semibold">{zoomPercent}%</span>
        </div>

        <button
          onClick={() => onFlyToZone('studio')}
          title="Center on Central Studio"
          className="bg-white/90 backdrop-blur-md p-1.5 rounded-lg border border-slate-200/80 shadow-xs hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1 text-xs font-mono"
        >
          <Home className="w-4 h-4 text-[#0D99FF]" />
          <span className="hidden sm:inline pr-1">Studio</span>
        </button>
      </div>

      {/* Top Right: Shortcuts Helper Trigger */}
      <div className="fixed top-4 right-4 z-40 pointer-events-auto flex items-center gap-2">
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-slate-200/80 shadow-xs hover:bg-slate-50 text-slate-600 transition-colors flex items-center gap-1.5 text-xs font-mono"
        >
          <Keyboard className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Shortcuts</span>
        </button>
      </div>

      {/* Shortcuts Modal Card */}
      {showHelp && (
        <div className="fixed top-14 right-4 z-50 pointer-events-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xl w-72 text-xs space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 font-semibold text-slate-800">
            <span>Canvas Navigation</span>
            <button
              onClick={() => setShowHelp(false)}
              className="text-slate-400 hover:text-slate-600 font-mono"
            >
              ✕
            </button>
          </div>
          <div className="space-y-1.5 text-slate-600 font-mono text-[11px]">
            <div className="flex justify-between">
              <span>Pan Canvas:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Click + Drag</span>
            </div>
            <div className="flex justify-between">
              <span>Hand Tool:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Space + Drag</span>
            </div>
            <div className="flex justify-between">
              <span>Zoom Cursor:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Scroll Wheel</span>
            </div>
            <div className="flex justify-between">
              <span>Jump Zones:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Keys 1 – 8</span>
            </div>
            <div className="flex justify-between">
              <span>Keyboard Pan:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Arrows / WASD</span>
            </div>
            <div className="flex justify-between">
              <span>Reset 100%:</span>
              <span className="text-slate-900 bg-slate-100 px-1.5 rounded">Key 0</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Center: Spatial Zone Quick-Jump Pills */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto max-w-[92vw] overflow-x-auto p-1">
        <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-lg flex items-center gap-1">
          {WORLD_ZONES.map((zone) => {
            const isCurrent = activeZoneId === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => onFlyToZone(zone.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isCurrent
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: zone.accentColor }}
                />
                <span className="hidden md:inline">{zone.title}</span>
                <span className="md:hidden">{zone.title.split(' ')[0]}</span>
                <span className={`text-[9px] opacity-60 ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                  {zone.index}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Right: Radar Minimap & Zoom Controls */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-auto flex flex-col items-end gap-2.5">
        {/* Interactive Spatial Minimap */}
        {showMinimap && (
          <div
            onClick={handleMinimapClick}
            className="w-40 h-28 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-lg p-2 cursor-crosshair relative overflow-hidden group"
            title="Click to navigate"
          >
            <div className="text-[8px] font-mono text-slate-400 flex items-center justify-between pb-1 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <Compass className="w-2.5 h-2.5 text-[#0D99FF]" /> RADAR
              </span>
              <span>5200 × 3800</span>
            </div>

            {/* Minimap World Nodes */}
            <div className="relative w-full h-20 mt-1">
              {WORLD_ZONES.map((zone) => {
                const nx = ((zone.x - WORLD_BOUNDS.minX) / worldW) * mapW;
                const ny = ((zone.y - WORLD_BOUNDS.minY) / worldH) * mapH;
                const isCurrent = activeZoneId === zone.id;

                return (
                  <div
                    key={zone.id}
                    className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110"
                    style={{
                      left: `${nx}px`,
                      top: `${ny}px`,
                      backgroundColor: zone.accentColor,
                      boxShadow: isCurrent ? `0 0 6px ${zone.accentColor}` : undefined
                    }}
                  />
                );
              })}

              {/* Viewport Box Indicator */}
              <div
                className="absolute border border-[#0D99FF] bg-[#0D99FF]/10 rounded-xs pointer-events-none transition-all duration-75"
                style={{
                  left: `${Math.max(0, Math.min(mapW - vpW, vpX))}px`,
                  top: `${Math.max(0, Math.min(mapH - vpH, vpY))}px`,
                  width: `${Math.max(8, Math.min(mapW, vpW))}px`,
                  height: `${Math.max(6, Math.min(mapH, vpH))}px`
                }}
              />
            </div>
          </div>
        )}

        {/* Floating Zoom Controls Bar */}
        <div className="bg-white/90 backdrop-blur-md p-1 rounded-xl border border-slate-200/90 shadow-md flex items-center gap-0.5 text-slate-700">
          <button
            onClick={() => onZoomAtPoint(window.innerWidth / 2, window.innerHeight / 2, 120)}
            title="Zoom Out (-)"
            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={() => onFlyTo(coordX, coordY, 1.0)}
            title="Reset Zoom to 100% (0)"
            className="px-2 py-1 hover:bg-slate-100 rounded-lg text-xs font-mono font-medium"
          >
            {zoomPercent}%
          </button>

          <button
            onClick={() => onZoomAtPoint(window.innerWidth / 2, window.innerHeight / 2, -120)}
            title="Zoom In (+)"
            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-slate-200 mx-0.5" />

          <button
            onClick={() => setShowMinimap(!showMinimap)}
            title="Toggle Minimap"
            className={`p-1.5 rounded-lg transition-colors ${
              showMinimap ? 'bg-slate-100 text-[#0D99FF]' : 'hover:bg-slate-100 text-slate-400'
            }`}
          >
            <Compass className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
