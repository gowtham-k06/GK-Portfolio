import React, { useState } from 'react';
import { WorldZone } from '../../types/world';
import { FolderGit2 } from 'lucide-react';

interface CaseStudiesBoardsProps {
  zone: WorldZone;
}

export const CaseStudiesBoards: React.FC<CaseStudiesBoardsProps> = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const projects = [
    {
      title: 'Nova Spatial OS',
      tagline: 'Multi-window spatial computing system for creative workflows',
      type: 'Spatial UI • macOS / Vision',
      dimensions: '2560 × 1440',
      color: '#0D99FF',
      metrics: 'Adopted across 22 apps'
    },
    {
      title: 'Ledger Flow Pro',
      tagline: 'High-density institutional trading terminal with zero latency',
      type: 'Fintech • Web Platform',
      dimensions: '1920 × 1080',
      color: '#7B61FF',
      metrics: '$2.4B Daily Volume'
    },
    {
      title: 'Canvas AI Copilot',
      tagline: 'Autonomous generative assistant directly integrated on canvas',
      type: 'AI Workspace • Vector Tool',
      dimensions: '1440 × 900',
      color: '#FF8A00',
      metrics: 'Featured on Product Hunt #1'
    }
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FF8A00]/10 text-[#FF8A00] flex items-center justify-center border border-[#FF8A00]/20">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              FEATURED ARTBOARDS & CASE STUDIES
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              FRAME MATRIX • SELECTED WORKS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
          <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 font-semibold">
            3 ACTIVE PROTOTYPES
          </span>
        </div>
      </div>

      {/* Frame Gallery */}
      <div className="grid grid-cols-3 gap-4 my-auto">
        {projects.map((p, idx) => {
          const isCurrent = selectedCase === idx;
          return (
            <div
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCase(idx);
              }}
              className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[280px] relative ${
                isCurrent
                  ? 'bg-slate-50/90 border-[#FF8A00] shadow-md ring-2 ring-[#FF8A00]/20'
                  : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              {/* Artboard Frame Header Bar */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[9px] font-mono text-slate-400">
                  <span className="font-semibold text-slate-600">FRAME 0{idx + 1}</span>
                  <span>{p.dimensions}</span>
                </div>

                {/* Simulated Wireframe / UI Preview */}
                <div className="w-full h-24 mt-2.5 rounded bg-slate-100/90 border border-slate-200 p-2 flex flex-col justify-between overflow-hidden relative group">
                  <div className="flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="h-1.5 bg-slate-200 rounded w-16 ml-2" />
                  </div>
                  
                  {/* Wireframe Mock Blocks */}
                  <div className="grid grid-cols-3 gap-1 my-auto">
                    <div className="h-9 bg-white rounded shadow-2xs border border-slate-200/60 p-1">
                      <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1" />
                      <div className="h-1 bg-slate-100 rounded w-full" />
                    </div>
                    <div className="h-9 bg-white rounded shadow-2xs border border-slate-200/60 p-1">
                      <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1" />
                      <div className="h-1 bg-slate-100 rounded w-full" />
                    </div>
                    <div className="h-9 bg-white rounded shadow-2xs border border-slate-200/60 p-1">
                      <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1" />
                      <div className="h-1 bg-slate-100 rounded w-full" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>100% SCALE</span>
                    <span className="text-[#FF8A00] font-semibold">VIEW PREVIEW →</span>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {p.type}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800 mt-0.5">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {p.tagline}
                  </p>
                </div>
              </div>

              {/* Metric Badge */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">IMPACT</span>
                <span className="font-semibold text-slate-700">{p.metrics}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
        <span>INTERACTIVE PROTOTYPE NODES</span>
        <span className="text-slate-600 font-medium">CLICK ANY FRAME TO INSPECT</span>
      </div>
    </div>
  );
};
