import React from 'react';
import { WorldZone } from '../../types/world';
import { Layers, Sparkles, Move } from 'lucide-react';

interface StudioDeskProps {
  zone: WorldZone;
}

export const StudioDesk: React.FC<StudioDeskProps> = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between overflow-hidden relative rounded-xl bg-gradient-to-b from-white to-slate-50/50">
      {/* Top Bar: Editorial Canvas Identity */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#0D99FF]/10 text-[#0D99FF] flex items-center justify-center border border-[#0D99FF]/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                GK PORTFOLIO
              </h1>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-semibold">
                Available for Q2
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Principal UX/UI & Product Systems Designer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5 overflow-hidden">
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#0D99FF] text-[10px] text-white font-bold flex items-center justify-center">
              GK
            </span>
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#7B61FF] text-[10px] text-white font-bold flex items-center justify-center">
              UX
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
            2.5D Canvas
          </span>
        </div>
      </div>

      {/* Centerpiece: Designer's Cutting Mat & Workspace */}
      <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left: Designer's Green Cutting Mat */}
        <div className="col-span-7 bg-[#1A3A2A] rounded-lg p-4 border border-[#234E39] shadow-inner text-emerald-100/70 relative overflow-hidden cutting-mat-grid flex flex-col justify-between min-h-[220px]">
          <div className="flex justify-between items-center text-[9px] font-mono opacity-80 border-b border-emerald-700/40 pb-1">
            <span>GRID CUTTING MAT • A3 SPEC</span>
            <span>METRIC 1:1</span>
          </div>

          {/* Hand-placed UI Draft Sketch / Wireframe Sheet */}
          <div className="bg-white text-slate-800 rounded-md p-3.5 shadow-md transform -rotate-1.5 border border-slate-200/80 mx-2 my-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[10px] font-mono text-slate-500">
              <span className="font-semibold text-slate-700">Artboard • Hero Experience</span>
              <span className="text-[#0D99FF]">● Prototype</span>
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-3.5 bg-slate-100 rounded w-4/5" />
              <div className="h-2 bg-slate-100 rounded w-full" />
              <div className="h-2 bg-slate-100 rounded w-2/3" />
              <div className="flex gap-2 pt-1">
                <div className="h-5 bg-[#0D99FF] text-white text-[9px] font-mono font-medium px-2 flex items-center rounded">
                  Explore Canvas
                </div>
                <div className="h-5 bg-slate-100 text-slate-600 text-[9px] font-mono px-2 flex items-center rounded border border-slate-200">
                  Drag to Pan
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono opacity-60">
            <span>30° / 45° / 60° GUIDE</span>
            <span>SCALE: 100%</span>
          </div>
        </div>

        {/* Right: Design Token Chips & Tools Desk */}
        <div className="col-span-5 flex flex-col justify-between gap-3">
          {/* Swatches Card */}
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80">
            <div className="text-[10px] font-mono font-semibold text-slate-600 mb-2 flex items-center justify-between">
              <span>SYSTEM TOKENS</span>
              <Sparkles className="w-3 h-3 text-[#0D99FF]" />
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { hex: '#0D99FF', name: 'Blue' },
                { hex: '#7B61FF', name: 'Violet' },
                { hex: '#FF7262', name: 'Coral' },
                { hex: '#00C48C', name: 'Mint' }
              ].map(c => (
                <div key={c.hex} className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded shadow-xs border border-white"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-[8px] font-mono text-slate-500 mt-1">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Guidance Box */}
          <div className="bg-white rounded-lg p-3 border border-slate-200 text-xs text-slate-600 shadow-2xs space-y-1.5">
            <div className="text-[10px] font-mono font-semibold text-[#0D99FF] flex items-center gap-1">
              <Move className="w-3 h-3" />
              <span>SPATIAL NAVIGATION</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Drag to freely pan the workspace. Scroll to zoom into any point. Click connector paths or objects to fly the camera.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Coordinates & Metaphors */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span>CENTERPIECE: STUDIO DESK</span>
          <span className="hidden sm:inline">RADIUS: 1800PX</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-600 font-semibold">WORKSPACE READY</span>
        </div>
      </div>
    </div>
  );
};
