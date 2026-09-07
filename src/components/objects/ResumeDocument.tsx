import React from 'react';
import { WorldZone } from '../../types/world';
import { Download, CheckCircle2, GraduationCap } from 'lucide-react';

interface ResumeDocumentProps {
  zone: WorldZone;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-[#FCFCFD] relative overflow-hidden text-slate-800 shadow-inner">
      {/* Aluminum Clipboard Clip at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-md shadow-md z-20 flex items-center justify-center border-b border-slate-500/30">
        <div className="w-12 h-2 rounded-full bg-slate-500/40" />
      </div>

      {/* Header Document Area */}
      <div className="pt-3 pb-3 border-b border-slate-200 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
            FORMAL RECORD • 2026 EDITION
          </span>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            CURRICULUM VITAE
          </h2>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            alert('Resume PDF download simulation: GK_Senior_Product_Designer_Resume.pdf');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-md text-[11px] font-mono hover:bg-slate-800 transition-colors shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>EXPORT PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet Columns */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Summary & Education */}
        <div className="col-span-5 space-y-4">
          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs space-y-1.5">
            <div className="text-[10px] font-mono uppercase text-[#0D99FF] font-semibold">
              Executive Summary
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Product Systems Designer with 5+ years building spatial, data-dense interfaces, multi-platform design systems, and developer-aligned workflows.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs space-y-2">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#0D99FF]" />
              <span>Education & Honors</span>
            </div>
            <div className="text-xs">
              <div className="font-semibold text-slate-800 text-[11px]">B.Tech / B.Des Computer Science & Interaction</div>
              <div className="text-[10px] text-slate-400 font-mono">First Class Distinction • 2021</div>
            </div>
            <div className="text-xs pt-1 border-t border-slate-100">
              <div className="font-semibold text-slate-800 text-[11px]">Human-Computer Interaction Spec</div>
              <div className="text-[10px] text-slate-400 font-mono">Stanford Online / Interaction Design Org</div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Competencies & Impact */}
        <div className="col-span-7 space-y-3">
          <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 shadow-2xs space-y-2.5">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">
              Core Technical Competencies
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">
                  <strong className="text-slate-800">Design Systems:</strong> Multi-brand token architecture, component lifecycle management, WCAG 2.2 AAA accessibility.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">
                  <strong className="text-slate-800">Interaction & Canvas:</strong> Infinite canvas architecture, micro-motion physics, touch gestures, spatial navigation.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">
                  <strong className="text-slate-800">Design Technology:</strong> React, TypeScript, SVG manipulation, Tailwind CSS, Framer Motion, Git workflow.
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-emerald-50/60 rounded-lg border border-emerald-200/70 text-[10px] font-mono text-emerald-800 flex items-center justify-between">
            <span>AVAILABILITY: IMMEDIATE / 2 WEEKS</span>
            <span className="font-semibold">GLOBAL REMOTE</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400">
        <span>SECURITY HASH: 7F8B92 • VERIFIED</span>
        <span className="text-slate-500 font-medium">SHEET 01 OF 01</span>
      </div>
    </div>
  );
};
