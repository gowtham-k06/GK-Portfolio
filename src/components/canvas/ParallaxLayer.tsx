import React from 'react';

interface ParallaxLayerProps {
  depth: number; // e.g. -0.5 (far back) to 0 (canvas plane) to 0.8 (floating close)
  mouseParallax: { x: number; y: number };
  children: React.ReactNode;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  depth,
  mouseParallax,
  children,
  className = ''
}) => {
  const offsetX = mouseParallax.x * depth * 35;
  const offsetY = mouseParallax.y * depth * 35;

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};
