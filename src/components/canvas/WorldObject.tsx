import React, { useState } from 'react';
import { WorldZone } from '../../types/world';

interface WorldObjectProps {
  zone: WorldZone;
  isActive: boolean;
  isHovered: boolean;
  onSelect: (zone: WorldZone) => void;
  onHover: (zoneId: WorldZone['id'] | null) => void;
  children: React.ReactNode;
  showTape?: boolean;
  tapePosition?: 'top-left' | 'top-right' | 'both';
}

export const WorldObject: React.FC<WorldObjectProps> = ({
  zone,
  isActive,
  isHovered,
  onSelect,
  onHover,
  children,
  showTape = false,
  tapePosition = 'both'
}) => {
  const [internalHover, setInternalHover] = useState(false);
  const effectiveHover = isHovered || internalHover;

  return (
    <div
      className="absolute cursor-pointer transition-shadow duration-300"
      style={{
        left: `${zone.x}px`,
        top: `${zone.y}px`,
        width: `${zone.width}px`,
        height: `${zone.height}px`,
        transform: `translate(-50%, -50%) rotate(${zone.rotation}deg)`,
        transformOrigin: 'center center',
        zIndex: isActive ? 20 : effectiveHover ? 15 : 10
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(zone);
      }}
      onMouseEnter={() => {
        setInternalHover(true);
        onHover(zone.id);
      }}
      onMouseLeave={() => {
        setInternalHover(false);
        onHover(null);
      }}
    >
      {/* Figma-like Frame Tag Header */}
      <div className="absolute -top-7 left-0 flex items-center gap-2 pointer-events-none select-none">
        <span
          className={`text-[11px] font-mono tracking-wide font-medium px-1.5 py-0.5 rounded transition-all duration-200 ${
            isActive
              ? 'bg-[#0D99FF] text-white font-semibold'
              : effectiveHover
              ? 'bg-slate-800 text-white'
              : 'bg-white/80 text-slate-500 border border-slate-200/80 shadow-2xs'
          }`}
        >
          {zone.title}
        </span>
        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
          {zone.tag}
        </span>
      </div>

      {/* Optional Washi Tape Strips */}
      {showTape && (tapePosition === 'top-left' || tapePosition === 'both') && (
        <div
          className="washi-tape absolute -top-3 -left-4 w-16 h-6 rotate-[-18deg] z-30 pointer-events-none opacity-80"
          style={{ background: 'rgba(254, 240, 138, 0.65)' }}
        />
      )}
      {showTape && (tapePosition === 'top-right' || tapePosition === 'both') && (
        <div
          className="washi-tape absolute -top-3 -right-4 w-16 h-6 rotate-[15deg] z-30 pointer-events-none opacity-80"
          style={{ background: 'rgba(254, 240, 138, 0.65)' }}
        />
      )}

      {/* Main Container Card */}
      <div
        className={`w-full h-full relative rounded-xl transition-all duration-300 ${
          isActive
            ? 'shadow-2xl ring-2 ring-[#0D99FF] ring-offset-2 ring-offset-transparent'
            : effectiveHover
            ? 'shadow-xl -translate-y-1 ring-1 ring-[#0D99FF]/50'
            : 'shadow-md hover:shadow-lg'
        }`}
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)'
        }}
      >
        {children}

        {/* Figma Selection Handles when Active or Hovered */}
        {(isActive || effectiveHover) && (
          <>
            <div className="figma-handle -top-1.5 -left-1.5" />
            <div className="figma-handle -top-1.5 -right-1.5" />
            <div className="figma-handle -bottom-1.5 -left-1.5" />
            <div className="figma-handle -bottom-1.5 -right-1.5" />

            {/* Midpoint handles */}
            <div className="figma-handle -top-1.5 left-1/2 -translate-x-1/2" />
            <div className="figma-handle -bottom-1.5 left-1/2 -translate-x-1/2" />
            <div className="figma-handle -left-1.5 top-1/2 -translate-y-1/2" />
            <div className="figma-handle -right-1.5 top-1/2 -translate-y-1/2" />
          </>
        )}
      </div>

      {/* Subtle Dimension Tag at Bottom */}
      <div className="absolute -bottom-6 right-0 text-[9px] font-mono text-slate-400 pointer-events-none select-none flex items-center gap-2">
        <span>{zone.width} × {zone.height}</span>
        {isActive && (
          <span className="text-[#0D99FF] font-semibold">● FOCUSED</span>
        )}
      </div>
    </div>
  );
};
