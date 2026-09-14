import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SpatialModulesProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const SpatialModules: React.FC<SpatialModulesProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4.5">
      {/* 1. CASE STUDIES FOLDER OBJECT */}
      <div
        onClick={() => onNavigate('works')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        {/* Count Badge */}
        <div className="absolute -top-2 -right-2 bg-[#FD5D07] text-white w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] border-2 border-white shadow-xs z-30">
          4
        </div>

        {/* 3D Physical Folder Graphic */}
        <div className="bg-[#F3F1EC] w-full flex-1 rounded-xl relative flex items-end justify-center pb-2.5 overflow-hidden [perspective:320px]">
          {/* Back folder sleeve */}
          <div className="absolute bottom-2.5 w-24 h-16 rounded-lg bg-[#00AFDF]/80 shadow-xs" />
          {/* Stacked paper sheets */}
          <div className="absolute bottom-4.5 w-18 h-15 bg-white rounded-md shadow-xs border border-[#E8E6E1] group-hover:-translate-y-2 transition-transform duration-300">
            <div className="p-1 space-y-1">
              <div className="h-1 bg-slate-200 rounded w-2/3" />
              <div className="h-1 bg-slate-100 rounded w-full" />
            </div>
          </div>
          <div className="absolute bottom-3.5 w-20 h-15 bg-white rounded-md shadow-xs border border-[#E8E6E1] group-hover:-translate-y-1 transition-transform duration-200">
            <div className="p-1 space-y-1">
              <div className="h-1 bg-slate-200 rounded w-1/2" />
            </div>
          </div>
          {/* Front translucent folder flap */}
          <div className="absolute bottom-2.5 w-24 h-14 rounded-lg bg-[#00AFDF]/40 backdrop-blur-xs border-t border-white/50 group-hover:scale-y-95 transition-transform origin-bottom" />
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>CASE STUDIES</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* 2. SELECTED WORK STACK OBJECT */}
      <div
        onClick={() => onNavigate('works')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        {/* Count Badge */}
        <div className="absolute -top-2 -right-2 bg-[#141414] text-white w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] border-2 border-white shadow-xs z-30">
          4
        </div>

        {/* 3D Dark Folder Graphic */}
        <div className="bg-[#F3F1EC] w-full flex-1 rounded-xl relative flex items-end justify-center pb-2.5 overflow-hidden [perspective:320px]">
          <div className="absolute bottom-2.5 w-24 h-16 rounded-lg bg-[#222222] shadow-xs" />
          <div className="absolute bottom-4.5 w-18 h-15 bg-white rounded-md shadow-xs border border-[#E8E6E1] group-hover:-translate-y-2 transition-transform duration-300">
            <div className="p-1 space-y-1">
              <div className="h-1 bg-amber-400/80 rounded w-1/2" />
              <div className="h-1 bg-slate-100 rounded w-3/4" />
            </div>
          </div>
          <div className="absolute bottom-3.5 w-20 h-15 bg-white rounded-md shadow-xs border border-[#E8E6E1] group-hover:-translate-y-1 transition-transform duration-200" />
          <div className="absolute bottom-2.5 w-24 h-14 rounded-lg bg-[#222222]/50 backdrop-blur-xs border-t border-white/30 group-hover:scale-y-95 transition-transform origin-bottom" />
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>SELECTED WORK</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* 3. FORTUNE LEADX INTERFACE TILE */}
      <div
        onClick={() => onNavigate('case-study', 'fortune-leadx')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        <div className="bg-[#F3F1EC] w-full flex-1 rounded-xl p-2.5 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="font-bold text-[#141414]">FORTUNE LEADX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="h-3 bg-white rounded border border-[#E8E6E1] p-0.5 flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#FD5D07]" />
              <div className="h-1 bg-slate-200 rounded w-3/4" />
            </div>
            <div className="h-3 bg-white rounded border border-[#E8E6E1] p-0.5 flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              <div className="h-1 bg-slate-200 rounded w-1/2" />
            </div>
          </div>

          <span className="text-[8px] font-mono text-[#7A7873] uppercase tracking-wider">
            CRM Console Spec
          </span>
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>LEADX CRM</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* 4. ABOUT GK POLAROID TILE */}
      <div
        onClick={() => onNavigate('about')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        <div className="bg-[#FAF9F5] w-full flex-1 rounded-xl p-2 flex flex-col items-center justify-center border border-[#E8E6E1]/60">
          <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#FAF9F5] flex items-center justify-center font-display text-2xl font-bold tracking-wider group-hover:rotate-2 group-hover:scale-105 transition-transform duration-200">
            GK
          </div>
          <span className="font-mono text-[9px] text-[#7A7873] mt-2 font-medium">
            Gowtham K • 2026
          </span>
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>GET TO KNOW ME</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* 5. PLAYGROUND / DESIGN IN MOTION */}
      <div
        onClick={() => onNavigate('playground')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        <div className="bg-[#F3F1EC] w-full flex-1 rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#7A7873]">
            <span>CANVAS 2D</span>
            <span className="text-[#0D99FF] font-bold">● ACTIVE</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0D99FF]/30 border border-[#0D99FF] group-hover:scale-125 transition-transform" />
            <div className="w-5 h-0.5 bg-[#0D99FF]/40 border-t border-dashed" />
            <div className="w-3 h-3 rounded-full bg-[#FD5D07]/30 border border-[#FD5D07] group-hover:scale-125 transition-transform" />
          </div>

          <span className="text-[8px] font-mono text-[#7A7873]">
            Vector Space Nodes
          </span>
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>PLAYGROUND</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* 6. CURRENT FOCUS PILL TILE */}
      <div
        onClick={() => onNavigate('case-study', 'fortune-leadx')}
        className="relative group bg-white/90 rounded-2xl border border-[#E8E6E1] p-1.5 h-38 sm:h-42 flex flex-col justify-between cursor-pointer hover:border-[#141414]/40 hover:shadow-md transition-all duration-300 select-none"
      >
        <div className="bg-[#FAF9F5] w-full flex-1 rounded-xl p-2.5 flex flex-col justify-between border border-[#E8E6E1]/60">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#7A7873]">
            <span>SYSTEM FOCUS</span>
            <span className="text-[#FD5D07] font-bold">2025–26</span>
          </div>

          <div className="my-auto text-left">
            <div className="font-mono text-[10px] font-bold text-[#141414] leading-tight">
              Fortune LeadX
            </div>
            <div className="text-[9px] text-[#7A7873] font-mono mt-0.5">
              The Fortune Group
            </div>
          </div>

          <div className="inline-flex items-center gap-1 text-[8px] font-mono text-emerald-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DEPLOYED</span>
          </div>
        </div>

        <div className="px-2 pt-2 pb-1 flex items-center justify-between text-[11px] font-mono font-bold text-[#141414]">
          <span>ACTIVE FOCUS</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
