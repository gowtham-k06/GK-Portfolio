import React from 'react';
import { WorldZone } from '../../types/world';
import { BookOpen, Bookmark, Sparkles } from 'lucide-react';

interface AboutNotebookProps {
  zone: WorldZone;
}

export const AboutNotebook: React.FC<AboutNotebookProps> = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col justify-between rounded-xl bg-[#FAF8F5] relative overflow-hidden text-slate-800 shadow-inner">
      {/* Bookmark Ribbon */}
      <div className="absolute top-0 right-12 w-6 h-16 bg-[#FF7262] rounded-b-md shadow-md z-20 flex items-end justify-center pb-1 text-white">
        <Bookmark className="w-3.5 h-3.5 fill-current" />
      </div>

      {/* Coffee Mug Ring Accent */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-4 border-[#C8B89E]/25 pointer-events-none opacity-50" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-3 z-10">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#FF7262]" />
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-600">
            FIELD NOTEBOOK • VOL. 04
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-400 bg-white/60 px-2 py-0.5 rounded border border-[#E7E2D8]">
          PAGE 42–43
        </span>
      </div>

      {/* Two-page Spread */}
      <div className="grid grid-cols-2 gap-5 my-auto z-10">
        {/* Left Page: Polaroid & Profile Ethos */}
        <div className="bg-white p-3.5 rounded-lg border border-[#E7E2D8] shadow-xs flex flex-col justify-between min-h-[260px] relative">
          {/* Polaroid Placeholder */}
          <div className="bg-[#FAF9F6] p-2.5 rounded shadow-xs border border-slate-200/80 transform -rotate-2">
            <div className="w-full h-24 bg-gradient-to-tr from-slate-100 to-amber-50 rounded flex items-center justify-center border border-dashed border-slate-300">
              <span className="text-[11px] font-mono text-slate-400">
                [ Designer Snapshot ]
              </span>
            </div>
            <div className="text-center pt-2 font-mono text-[10px] text-slate-600 font-medium">
              Gunasundhari (GK) • 2026
            </div>
          </div>

          <div className="space-y-1.5 pt-3">
            <div className="text-[10px] font-mono uppercase text-[#FF7262] font-semibold tracking-wider">
              Core Philosophy
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed italic">
              "Crafting spatial, high-density interfaces that turn complex data structures into effortless, delightful human conversations."
            </p>
          </div>
        </div>

        {/* Right Page: Core Pillars / Design Notes */}
        <div className="bg-white p-3.5 rounded-lg border border-[#E7E2D8] shadow-xs flex flex-col justify-between min-h-[260px] sketch-grid">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200 text-[10px] font-mono text-slate-500 font-semibold">
              <span>DESIGN MANIFESTO</span>
              <Sparkles className="w-3 h-3 text-[#FF7262]" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-amber-50/60 border border-amber-100">
                <span className="font-semibold text-slate-800 text-[11px] block">
                  01. Systematic Harmony
                </span>
                <span className="text-[10px] text-slate-500">
                  Atomic components and tokens designed for scale and velocity.
                </span>
              </div>

              <div className="p-2 rounded bg-sky-50/60 border border-sky-100">
                <span className="font-semibold text-slate-800 text-[11px] block">
                  02. Spatial Interaction
                </span>
                <span className="text-[10px] text-slate-500">
                  Beyond flat scrolling: fluid canvases, spatial models, direct manipulation.
                </span>
              </div>

              <div className="p-2 rounded bg-rose-50/60 border border-rose-100">
                <span className="font-semibold text-slate-800 text-[11px] block">
                  03. Micro-delight
                </span>
                <span className="text-[10px] text-slate-500">
                  Subtle physics, meaningful haptics, and thoughtful typography.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[9px] font-mono text-slate-400 border-t border-slate-100 flex justify-between">
            <span>NOTES ON CANVASES</span>
            <span>READ TIME: 2 MIN</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E7E2D8] text-[10px] font-mono text-slate-400 z-10">
        <span>BOUND BY INK & THREAD</span>
        <span>LOCATION: ABOUT ZONE</span>
      </div>
    </div>
  );
};
