import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SpatialModulesProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const SpatialModules: React.FC<SpatialModulesProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] w-full max-w-[360px] sm:max-w-[545px] shrink-0 select-none">
      {/* 1. CASE STUDIES (Bright cyan/blue folder) */}
      <div
        onClick={() => onNavigate('works')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Count Badge in top right */}
        <div className="absolute top-3.5 right-3.5 z-20 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#00A3FF] text-white rounded-full border border-white/80 shadow-xs">
          4
        </div>

        {/* Visual Object: Layered Cyan/Blue Folder */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-[#EDF5F9] flex items-center justify-center">
          <div className="relative w-[116px] h-[82px] flex items-end justify-center">
            {/* Back folder tab */}
            <div className="absolute top-1 left-2 w-10 h-3 rounded-t-md bg-[#008DD8]" />
            {/* Back folder sleeve */}
            <div className="absolute bottom-0 w-[110px] h-[68px] rounded-lg bg-[#00A3FF] shadow-xs" />
            {/* Stacked paper sheets */}
            <div className="absolute bottom-5 w-[92px] h-[58px] bg-white rounded-md shadow-xs border border-[#E0DFD8] group-hover:-translate-y-2 transition-transform duration-200 p-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 bg-[#00A3FF]/40 rounded w-2/3" />
                <div className="h-1 bg-slate-200 rounded w-full" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
                <div className="h-1 bg-slate-200 rounded w-1/2" />
              </div>
            </div>
            <div className="absolute bottom-3 w-[96px] h-[56px] bg-white/95 rounded-md shadow-xs border border-[#E0DFD8] group-hover:-translate-y-1 transition-transform duration-150 p-1.5 flex flex-col justify-between">
              <div className="flex items-end gap-1 h-3 pt-0.5">
                <div className="w-2 h-2 bg-[#00A3FF] rounded-xs" />
                <div className="w-2 h-3 bg-[#0284C7] rounded-xs" />
                <div className="w-2 h-1.5 bg-[#38BDF8] rounded-xs" />
              </div>
            </div>
            {/* Front glossy folder flap */}
            <div className="absolute bottom-0 w-[110px] h-[48px] rounded-b-lg rounded-t-sm bg-gradient-to-b from-[#38BDF8] to-[#0284C7] shadow-md border-t border-white/60 group-hover:scale-y-95 transition-transform origin-bottom" />
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            CASE STUDIES
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#00A3FF] transition-colors shrink-0" />
        </div>
      </div>

      {/* 2. SELECTED WORK (Dark charcoal/black folder) */}
      <div
        onClick={() => onNavigate('works')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Count Badge in top right */}
        <div className="absolute top-3.5 right-3.5 z-20 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#18181B] text-white rounded-full border border-white/80 shadow-xs">
          4
        </div>

        {/* Visual Object: Layered Dark Charcoal Folder */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-[#F0EFEA] flex items-center justify-center">
          <div className="relative w-[116px] h-[82px] flex items-end justify-center">
            {/* Back folder tab */}
            <div className="absolute top-1 left-2 w-10 h-3 rounded-t-md bg-[#18181B]" />
            {/* Back folder sleeve */}
            <div className="absolute bottom-0 w-[110px] h-[68px] rounded-lg bg-[#27272A] shadow-xs" />
            {/* Stacked paper sheets */}
            <div className="absolute bottom-5 w-[92px] h-[58px] bg-white rounded-md shadow-xs border border-[#E0DFD8] group-hover:-translate-y-2 transition-transform duration-200 p-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 bg-[#FD5D07] rounded w-1/2" />
                <div className="h-1 bg-slate-200 rounded w-full" />
              </div>
              <div className="h-1 bg-slate-300 rounded w-2/3" />
            </div>
            <div className="absolute bottom-3 w-[96px] h-[56px] bg-white/95 rounded-md shadow-xs border border-[#E0DFD8] group-hover:-translate-y-1 transition-transform duration-150 p-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 bg-slate-300 rounded w-3/4" />
                <div className="h-1 bg-slate-200 rounded w-1/2" />
              </div>
            </div>
            {/* Front dark folder flap */}
            <div className="absolute bottom-0 w-[110px] h-[48px] rounded-b-lg rounded-t-sm bg-gradient-to-b from-[#2E2E33] to-[#18181B] shadow-md border-t border-white/25 group-hover:scale-y-95 transition-transform origin-bottom" />
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            SELECTED WORK
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#141414] transition-colors shrink-0" />
        </div>
      </div>

      {/* 3. FORTUNE LEADX (Miniature CRM Product Artifact) */}
      <div
        onClick={() => onNavigate('case-study', 'fortune-leadx')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Visual Object: Miniature CRM interface artifact */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-[#FAF9F5] border border-[#E8E6E1]/60 p-2 flex flex-col justify-between">
          {/* Micro Header */}
          <div className="flex items-center justify-between pb-1 border-b border-[#E8E6E1]/60">
            <span className="font-mono text-[7.5px] font-bold text-[#141414] tracking-wider">
              LEADX CRM
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[6.5px] text-emerald-700 font-semibold">LIVE</span>
            </div>
          </div>

          {/* Micro Stats Bar */}
          <div className="grid grid-cols-2 gap-1 py-0.5">
            <div className="bg-white rounded p-1 border border-[#E8E6E1]/80">
              <span className="block text-[6px] font-mono text-[#7A7873] uppercase">PIPELINE</span>
              <span className="text-[8px] font-mono font-bold text-[#141414]">$240K</span>
            </div>
            <div className="bg-white rounded p-1 border border-[#E8E6E1]/80">
              <span className="block text-[6px] font-mono text-[#7A7873] uppercase">LEADS</span>
              <span className="text-[8px] font-mono font-bold text-emerald-700">+94</span>
            </div>
          </div>

          {/* Micro CRM Rows */}
          <div className="space-y-1">
            <div className="bg-white rounded p-1 border border-[#E8E6E1]/60 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <div className="w-10 h-1 bg-slate-200 rounded" />
              </div>
              <span className="text-[6px] font-mono font-bold px-1 rounded bg-emerald-100 text-emerald-800">
                WON
              </span>
            </div>
            <div className="bg-white rounded p-1 border border-[#E8E6E1]/60 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                <div className="w-8 h-1 bg-slate-200 rounded" />
              </div>
              <span className="text-[6px] font-mono font-bold px-1 rounded bg-sky-100 text-sky-800">
                DEAL
              </span>
            </div>
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            FORTUNE LEADX
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] transition-colors shrink-0" />
        </div>
      </div>

      {/* 4. GET TO KNOW ME (Portrait / Identity Visual with warm tones) */}
      <div
        onClick={() => onNavigate('about')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Visual Object: Editorial Identity Visual with warm skin/photo tones */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-gradient-to-tr from-[#2C1D18] via-[#4A3328] to-[#784E38] p-2 flex flex-col justify-between">
          {/* Subtle Viewfinder Frame */}
          <div className="flex justify-between text-amber-200/50 text-[7px] font-mono leading-none">
            <span>⌜</span>
            <span className="text-[6.5px] uppercase tracking-wider text-amber-100/70">PORTRAIT SPEC</span>
            <span>⌝</span>
          </div>

          {/* Central Portrait Emblem */}
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-amber-300/30 flex items-center justify-center text-amber-100 font-display text-2xl font-bold tracking-wider shadow-inner group-hover:scale-105 transition-transform duration-200">
              GK
            </div>
            <span className="font-mono text-[8px] font-semibold text-amber-100/90 tracking-widest uppercase mt-1">
              Gowtham K
            </span>
          </div>

          {/* Viewfinder Bottom Markers */}
          <div className="flex justify-between items-baseline text-amber-200/50 text-[7px] font-mono leading-none">
            <span>⌞</span>
            <span className="text-[6px] tracking-wider text-amber-200/60 uppercase">BENGALURU • 2026</span>
            <span>⌟</span>
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            GET TO KNOW ME
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#FD5D07] transition-colors shrink-0" />
        </div>
      </div>

      {/* 5. PLAYGROUND (Experimental Interactive Canvas / Vector Nodes) */}
      <div
        onClick={() => onNavigate('playground')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Visual Object: Tactile Vector Node Playground Experiment */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-[#F5F4EE] border border-[#E8E6E1]/60 p-2 flex flex-col justify-between">
          {/* Top Canvas Tag */}
          <div className="flex items-center justify-between text-[7px] font-mono">
            <span className="text-[#7A7873] uppercase tracking-wider">CANVAS SPEC</span>
            <span className="text-[#0D99FF] font-bold">● TACTILE</span>
          </div>

          {/* Interactive Vector Space SVG */}
          <div className="relative my-auto w-full h-[58px] flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 140 60" fill="none">
              {/* Background Coordinate Crosshairs */}
              <circle cx="25" cy="15" r="0.8" fill="#B5B2AA" />
              <circle cx="70" cy="15" r="0.8" fill="#B5B2AA" />
              <circle cx="115" cy="15" r="0.8" fill="#B5B2AA" />
              <circle cx="25" cy="45" r="0.8" fill="#B5B2AA" />
              <circle cx="70" cy="45" r="0.8" fill="#B5B2AA" />
              <circle cx="115" cy="45" r="0.8" fill="#B5B2AA" />

              {/* Connecting Bezier Curve */}
              <path
                d="M 28 38 C 50 10, 85 50, 112 22"
                stroke="#0D99FF"
                strokeWidth="1.75"
                strokeDasharray="none"
              />

              {/* Tangent guide line */}
              <line x1="28" y1="38" x2="50" y2="10" stroke="#FD5D07" strokeWidth="0.75" strokeDasharray="2 2" />

              {/* Node 1: Cyan Anchor */}
              <circle cx="28" cy="38" r="4.5" fill="#0D99FF" fillOpacity="0.25" />
              <circle cx="28" cy="38" r="2.5" fill="#0D99FF" />

              {/* Node 2: Orange Anchor */}
              <circle cx="112" cy="22" r="4.5" fill="#FD5D07" fillOpacity="0.25" />
              <circle cx="112" cy="22" r="2.5" fill="#FD5D07" />

              {/* Tangent handle point */}
              <circle cx="50" cy="10" r="1.75" fill="#FD5D07" />
            </svg>
          </div>

          {/* Bottom Coordinate Indicator */}
          <div className="flex items-center justify-between text-[6.5px] font-mono text-[#7A7873]">
            <span>p1: [28, 38]</span>
            <span className="text-[#FD5D07]">p2: [112, 22]</span>
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            PLAYGROUND
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#0D99FF] transition-colors shrink-0" />
        </div>
      </div>

      {/* 6. ACTIVE FOCUS (Fortune LeadX / Design Systems / System Status) */}
      <div
        onClick={() => onNavigate('case-study', 'fortune-leadx')}
        className="group relative bg-white w-full max-w-[175px] sm:w-[175px] h-[170px] rounded-[22px] border border-[#E8E6E1] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#141414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
      >
        {/* Visual Object: Design Systems & Active Product Representation */}
        <div className="h-[118px] w-full rounded-[16px] relative overflow-hidden bg-[#FAF9F5] border border-[#E8E6E1]/60 p-2 flex flex-col justify-between">
          {/* Subtle Green Status Indicator */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[7px] text-[#7A7873] uppercase tracking-wider">
              CURRENT FOCUS
            </span>
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[6.5px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>DEPLOYED</span>
            </div>
          </div>

          {/* Product & System Spec */}
          <div className="my-auto space-y-1">
            <div className="text-[9.5px] font-mono font-bold text-[#141414] leading-tight">
              Fortune LeadX
            </div>
            <div className="text-[7.5px] font-mono text-[#7A7873]">
              The Fortune Group • SaaS
            </div>

            {/* Token Ramp Visual */}
            <div className="flex items-center gap-1 pt-1">
              <span className="w-3 h-3 rounded-xs bg-[#10B981] border border-black/10 shadow-2xs" />
              <span className="w-3 h-3 rounded-xs bg-[#0EA5E9] border border-black/10 shadow-2xs" />
              <span className="w-3 h-3 rounded-xs bg-[#8B5CF6] border border-black/10 shadow-2xs" />
              <span className="w-3 h-3 rounded-xs bg-[#FD5D07] border border-black/10 shadow-2xs" />
              <span className="w-3 h-3 rounded-xs bg-[#18181B] border border-black/10 shadow-2xs" />
            </div>
          </div>

          {/* Component spec pill */}
          <div className="text-[6.5px] font-mono text-[#7A7873] truncate">
            Design Tokens &bull; v2.4.0
          </div>
        </div>

        {/* Card Label Bar */}
        <div className="h-[28px] px-1 pt-1 flex items-center justify-between">
          <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider text-[#141414] truncate">
            ACTIVE FOCUS
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-emerald-600 transition-colors shrink-0" />
        </div>
      </div>
    </div>
  );
};

