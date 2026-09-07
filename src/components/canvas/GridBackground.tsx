import React from 'react';
import { CameraState } from '../../types/world';

interface GridBackgroundProps {
  camera: CameraState;
  parallax?: { x: number; y: number };
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ camera, parallax = { x: 0, y: 0 } }) => {
  const { x, y, zoom } = camera;
  
  // Parallax subtle offset for the deep grid layer
  const offsetX = x + parallax.x * 12;
  const offsetY = y + parallax.y * 12;

  const gridSize = 40 * zoom;
  const majorGridSize = 200 * zoom;

  // Viewport center
  const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;
  const cy = typeof window !== 'undefined' ? window.innerHeight / 2 : 600;

  // Background position so that (0, 0) world coordinates align with origin
  const bgPosX = cx + offsetX;
  const bgPosY = cy + offsetY;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#F9FAFB]">
      {/* Dynamic Grid Pattern */}
      <svg className="w-full h-full absolute inset-0">
        <defs>
          {/* Minor Dot Grid */}
          <pattern
            id="canvas-dot-grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${bgPosX % gridSize}, ${bgPosY % gridSize})`}
          >
            <circle
              cx={gridSize / 2}
              cy={gridSize / 2}
              r={Math.max(1, 1.2 * Math.min(zoom, 1.5))}
              fill="rgba(15, 23, 42, 0.12)"
            />
          </pattern>

          {/* Major Grid Lines for Figma feel */}
          <pattern
            id="canvas-major-grid"
            width={majorGridSize}
            height={majorGridSize}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${bgPosX % majorGridSize}, ${bgPosY % majorGridSize})`}
          >
            <path
              d={`M ${majorGridSize} 0 L 0 0 0 ${majorGridSize}`}
              fill="none"
              stroke="rgba(15, 23, 42, 0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Fill backgrounds with patterns */}
        <rect width="100%" height="100%" fill="url(#canvas-dot-grid)" />
        <rect width="100%" height="100%" fill="url(#canvas-major-grid)" />

        {/* World Origin Crosshair at (0, 0) */}
        <g transform={`translate(${bgPosX}, ${bgPosY})`}>
          <line
            x1="-60"
            y1="0"
            x2="60"
            y2="0"
            stroke="#0D99FF"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <line
            x1="0"
            y1="-60"
            x2="0"
            y2="60"
            stroke="#0D99FF"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <circle cx="0" cy="0" r="4" fill="#0D99FF" opacity="0.8" />
          <text
            x="12"
            y="18"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fontWeight="600"
            fill="#0D99FF"
            letterSpacing="0.05em"
            opacity="0.75"
          >
            ORIGIN [0, 0]
          </text>
        </g>
      </svg>
    </div>
  );
};
