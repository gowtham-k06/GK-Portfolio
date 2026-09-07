import { useEffect } from 'react';
import { useCamera } from './hooks/useCamera';
import { Canvas } from './components/canvas/Canvas';
import { NavigationController } from './components/hud/NavigationController';

export function App() {
  const {
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
  } = useCamera({
    minZoom: 0.25,
    maxZoom: 2.2
  });

  // Ensure camera starts centered at Central Studio on initial mount
  useEffect(() => {
    flyToZone('studio');
  }, [flyToZone]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#F8F9FA] select-none">
      {/* Infinite Canvas Experience */}
      <Canvas
        camera={camera}
        isDragging={isDragging}
        isSpacePressed={isSpacePressed}
        mouseParallax={mouseParallax}
        activeZoneId={activeZoneId}
        onSelectZone={flyToZone}
        onZoomAtPoint={zoomAtPoint}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      {/* Ergonomic Spatial Navigation HUD */}
      <NavigationController
        camera={camera}
        activeZoneId={activeZoneId}
        onFlyToZone={flyToZone}
        onFlyTo={flyTo}
        onZoomAtPoint={zoomAtPoint}
      />
    </div>
  );
}

export default App;
