import React, { useState, useEffect } from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { useCamera } from '../../hooks/useCamera';
import { Canvas } from '../../components/canvas/Canvas';
import { NavigationController } from '../../components/hud/NavigationController';
import { ArrowLeft, Maximize2, Sparkles, Move } from 'lucide-react';

interface PlaygroundPageProps {
  onNavigate?: (route: string) => void;
}

export const PlaygroundPage: React.FC<PlaygroundPageProps> = () => {
  const [activeExperiment, setActiveExperiment] = useState<string | null>(null);

  // Interactive Mini States for Playground crafts
  const [toggleState, setToggleState] = useState(false);
  const [counter, setCounter] = useState(42);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Repurposed Canvas Camera Hook
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

  useEffect(() => {
    if (activeExperiment === 'spatial-canvas') {
      flyToZone('studio');
    }
  }, [activeExperiment, flyToZone]);

  // If Fullscreen Spatial Canvas Sandbox is active
  if (activeExperiment === 'spatial-canvas') {
    return (
      <div className="fixed inset-0 z-50 bg-[#F8F9FA] overflow-hidden flex flex-col">
        {/* Minimal Experiment Top Bar */}
        <div className="h-14 px-4 sm:px-6 bg-white/90 backdrop-blur-md border-b border-[#E8E6E1] flex items-center justify-between z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveExperiment(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E6E1] text-xs font-mono font-semibold text-[#141414] hover:bg-[#F3F1EC] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit Experiment</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#7A7873]">
              <span>PLAYGROUND CRAFT 01</span>
              <span>•</span>
              <span className="font-bold text-[#141414]">Spatial Infinite Canvas Sandbox</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-[#7A7873] hidden md:inline">DRAG / PINCH TO PAN • SPACE+DRAG</span>
            <span className="px-2 py-0.5 rounded bg-[#0D99FF]/10 text-[#0D99FF] font-semibold">
              INTERACTIVE REPURPOSED CANVAS
            </span>
          </div>
        </div>

        {/* The Live Preserved Infinite Canvas */}
        <div className="relative flex-1 w-full h-full overflow-hidden select-none">
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

          <NavigationController
            camera={camera}
            activeZoneId={activeZoneId}
            onFlyToZone={flyToZone}
            onFlyTo={flyTo}
            onZoomAtPoint={zoomAtPoint}
          />
        </div>
      </div>
    );
  }

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 space-y-14 sm:space-y-20">
      {/* Header */}
      <section className="border-b border-[#E8E6E1] pb-10 sm:pb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FD5D07] block">
              [ 04 • EXPERIMENTS & CRAFT ]
            </span>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#141414] tracking-tight mt-1">
              PLAYGROUND
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
              An interactive laboratory for experimental interfaces, tactile micro-animations, physics simulations, and our repurposed spatial canvas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Anchor Experiment: Spatial Infinite Canvas */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#141414] text-[#FAF9F5] relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FD5D07] text-[11px] font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REPURPOSED EXPERIMENT • ARCHIVED FROM V1</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl tracking-tight text-white">
              SPATIAL INFINITE CANVAS
            </h2>

            <p className="text-sm sm:text-base text-[#D4D2CD] max-w-2xl leading-relaxed">
              The original infinite Figma-like portfolio canvas has been preserved and repurposed as an interactive playground experiment. Experience smooth 2D camera navigation, inertial panning, spatial zones, and vector connector links.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#A8A59E]">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">2D Matrix Camera</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Inertial Damping</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Mouse Parallax</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Figma Coordinates</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <button
              onClick={() => setActiveExperiment('spatial-canvas')}
              className="px-6 py-3.5 rounded-full bg-[#FD5D07] hover:bg-[#E54F03] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Launch Canvas Sandbox</span>
            </button>
            <span className="text-[10px] font-mono text-[#A8A59E] mt-2">
              ESC or click back button to return anytime
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Micro Crafts Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
            [ EXPERIMENTS ]
          </span>
          <div className="h-px flex-1 bg-[#E8E6E1]" />
          <span className="font-mono text-xs text-[#7A7873] uppercase">
            INTERACTIVE MICRO CRAFTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Craft 1: Haptic Switch & Toggle States */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] text-[11px] font-mono text-[#7A7873]">
                <span>EXPERIMENT 02</span>
                <span className="text-[#FD5D07] font-semibold">MICRO-INTERACTION</span>
              </div>
              <h3 className="text-xl font-bold text-[#141414] mt-3">Haptic Switch & Toggle States</h3>
              <p className="text-xs text-[#4A4844] mt-1.5 leading-relaxed">
                Sensory feedback exploration for mission-critical toggle switches, complete with tactile sound simulation and affirmative color shifts.
              </p>
            </div>

            {/* Interactive Sandbox Widget */}
            <div className="p-6 rounded-xl bg-[#F3F1EC] border border-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono">
                <span className="text-[#7A7873] block">SWITCH STATUS</span>
                <span className={`font-bold ${toggleState ? 'text-[#FD5D07]' : 'text-[#7A7873]'}`}>
                  {toggleState ? 'ACTIVE • DEPLOYED' : 'INACTIVE • STANDBY'}
                </span>
              </div>

              <button
                onClick={() => setToggleState(!toggleState)}
                className={`w-16 h-9 rounded-full p-1 transition-colors duration-200 cursor-pointer flex items-center ${
                  toggleState ? 'bg-[#FD5D07]' : 'bg-[#D9D5CB]'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                    toggleState ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Craft 2: High-Density Mini Terminal */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] text-[11px] font-mono text-[#7A7873]">
                <span>EXPERIMENT 03</span>
                <span className="text-[#10B981] font-semibold">DATA DENSITY</span>
              </div>
              <h3 className="text-xl font-bold text-[#141414] mt-3">High-Density Mini Terminal</h3>
              <p className="text-xs text-[#4A4844] mt-1.5 leading-relaxed">
                Compressing maximum operational information into minimal screen real estate without visual fatigue.
              </p>
            </div>

            {/* Interactive Sandbox Widget */}
            <div className="p-4 rounded-xl bg-[#141414] text-[#FAF9F5] font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#A8A59E]">
                <span>TELEMETRY FEED</span>
                <span className="text-emerald-400">● LIVE</span>
              </div>

              <div className="flex items-center justify-between">
                <span>ACTIVE TRANSACTIONS:</span>
                <span className="text-[#FD5D07] font-bold">{counter} / SEC</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setCounter((c) => c + 1)}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white transition-colors"
                >
                  + ACCELERATE
                </button>
                <button
                  onClick={() => setCounter((c) => Math.max(0, c - 1))}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white transition-colors"
                >
                  - THROTTLE
                </button>
                <button
                  onClick={() => setCounter(42)}
                  className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-[#A8A59E] hover:text-white"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>

          {/* Craft 3: Tactile Magnetic Cursor */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] text-[11px] font-mono text-[#7A7873]">
                <span>EXPERIMENT 04</span>
                <span className="text-[#7B61FF] font-semibold">INPUT DYNAMICS</span>
              </div>
              <h3 className="text-xl font-bold text-[#141414] mt-3">Tactile Magnetic Pointer Target</h3>
              <p className="text-xs text-[#4A4844] mt-1.5 leading-relaxed">
                Interactive target button that exerts physical magnetic pull as the pointer approaches its gravitational field.
              </p>
            </div>

            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCursorPos({
                  x: (e.clientX - rect.left - rect.width / 2) * 0.15,
                  y: (e.clientY - rect.top - rect.height / 2) * 0.15
                });
              }}
              onMouseLeave={() => setCursorPos({ x: 0, y: 0 })}
              className="p-10 rounded-xl bg-[#F3F1EC] border border-[#E8E6E1] flex items-center justify-center relative overflow-hidden"
            >
              <button
                style={{
                  transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
                }}
                className="px-6 py-3 rounded-full bg-[#141414] text-white text-xs font-mono tracking-wider transition-transform duration-100 ease-out shadow-md"
              >
                MAGNETIC CORE
              </button>
            </div>
          </div>

          {/* Craft 4: Direct Spring Drag */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] text-[11px] font-mono text-[#7A7873]">
                <span>EXPERIMENT 05</span>
                <span className="text-[#F59E0B] font-semibold">SPRING PHYSICS</span>
              </div>
              <h3 className="text-xl font-bold text-[#141414] mt-3">Direct Manipulation Canvas</h3>
              <p className="text-xs text-[#4A4844] mt-1.5 leading-relaxed">
                Direct spatial manipulation exploring damping physics and elevation changes on active grab.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F3F1EC] border border-[#E8E6E1] flex items-center justify-center">
              <div className="p-4 rounded-xl bg-white border border-[#E8E6E1] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-grab active:cursor-grabbing text-xs font-mono text-center">
                <Move className="w-4 h-4 mx-auto text-[#FD5D07] mb-1.5" />
                <span className="font-bold text-[#141414]">GRAB & INSPECT</span>
                <span className="text-[10px] text-[#7A7873] block mt-0.5">Tactile elevation response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
