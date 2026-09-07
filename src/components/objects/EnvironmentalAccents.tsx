import React from 'react';
import { ENVIRONMENTAL_ITEMS } from '../../data/worldData';

export const EnvironmentalAccents: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
      {ENVIRONMENTAL_ITEMS.map((item) => {
        if (item.type === 'cursor') {
          const color = item.data?.color || '#0D99FF';
          return (
            <div
              key={item.id}
              className="absolute z-30 transition-transform duration-700 ease-out select-none"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`
              }}
            >
              {/* Figma Vector Cursor */}
              <div className="relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={color}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  className="drop-shadow-sm transform -rotate-12"
                >
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" />
                </svg>

                {/* Nametag Pill */}
                <div
                  className="absolute left-4 top-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold text-white whitespace-nowrap shadow-sm flex items-center gap-1"
                  style={{ backgroundColor: color }}
                >
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          );
        }

        if (item.type === 'redline') {
          return (
            <div
              key={item.id}
              className="absolute flex items-center justify-center pointer-events-none select-none z-20"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="flex items-center gap-1">
                {/* Left tick */}
                <div className="w-0.5 h-3 bg-red-500/70" />
                {/* Horizontal line */}
                <div
                  className="h-0.5 bg-red-500/70 relative flex items-center justify-center"
                  style={{ width: `${item.data?.length || 200}px` }}
                >
                  <span className="bg-red-500 text-white text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold tracking-wider shadow-2xs">
                    {item.label}
                  </span>
                </div>
                {/* Right tick */}
                <div className="w-0.5 h-3 bg-red-500/70" />
              </div>
            </div>
          );
        }

        if (item.type === 'swatch') {
          const colors: string[] = item.data?.colors || [];
          return (
            <div
              key={item.id}
              className="absolute z-20 bg-white p-2 rounded-lg shadow-sm border border-slate-200/80 transform rotate-3"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`
              }}
            >
              <div className="text-[8px] font-mono text-slate-400 mb-1 font-semibold">
                TOKENS PALETTE
              </div>
              <div className="flex gap-1">
                {colors.map((c, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-6 rounded-xs shadow-2xs border border-white"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          );
        }

        if (item.type === 'ruler') {
          return (
            <div
              key={item.id}
              className="absolute z-20 bg-amber-50/90 border border-amber-200/80 rounded px-2 py-1 shadow-xs transform -rotate-12 flex items-center gap-1 font-mono text-[9px] text-amber-900"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`
              }}
            >
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span>{item.label}</span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
