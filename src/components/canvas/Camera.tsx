import React from 'react';
import { CameraState } from '../../types/world';

interface CameraProps {
  camera: CameraState;
  children: React.ReactNode;
}

export const Camera: React.FC<CameraProps> = ({ camera, children }) => {
  const { x, y, zoom } = camera;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        overflow: 'visible'
      }}
    >
      <div
        className="absolute top-0 left-0"
        style={{
          transform: `translate3d(calc(50vw + ${x}px), calc(50vh + ${y}px), 0) scale(${zoom})`,
          transformOrigin: '0 0',
          willChange: 'transform',
          pointerEvents: 'auto'
        }}
      >
        {children}
      </div>
    </div>
  );
};
