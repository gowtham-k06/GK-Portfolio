import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Mail, ArrowUpRight } from 'lucide-react';

interface IdentityRailProps {
  onNavigate: (route: string) => void;
}

export const IdentityRail: React.FC<IdentityRailProps> = ({ onNavigate }) => {
  const metadataRows = [
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Timezone', value: 'IST (UTC+05:30)' },
    { label: 'Experience', value: '4 roles / 2023–Present' },
    { label: 'Current Org', value: 'The Fortune Group' },
    { label: 'Focus', value: 'SaaS, CRM, Systems' },
    { label: 'Tooling', value: 'Figma, Design Systems, React, TypeScript' },
  ];

  return (
    <aside className="w-full lg:w-[365px] shrink-0 bg-white lg:bg-[#FAF9F5] border-b lg:border-b-0 lg:border-r border-[#E8E6E1] flex flex-col justify-between p-6 sm:p-8 lg:p-7 xl:px-8 xl:py-9 select-none z-20">
      <div className="space-y-5">
        {/* Profile Card Top Block */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#E8E6E1]/70">
          <div className="w-13 h-13 rounded-2xl bg-[#141414] text-[#FAF9F5] flex items-center justify-center font-display text-2xl font-bold tracking-wider shrink-0 border border-[#2E2E33] shadow-xs">
            GK
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-[15px] font-bold text-[#141414] tracking-tight truncate leading-tight">
              Gowtham K (GK)
            </h2>
            <div className="inline-flex items-center gap-1.5 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-700 font-semibold">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Short Personal Introduction */}
        <p className="text-xs sm:text-[13px] text-[#4A4844] leading-relaxed">
          Product & interaction designer focused on <strong className="text-[#141414] font-semibold">SaaS, CRM, and design systems</strong>. Turning complex data-dense logic into calm, tactile digital interfaces.
        </p>

        {/* Structured Metadata Grid Rows */}
        <div className="divide-y divide-[#E8E6E1]/70 border-y border-[#E8E6E1]/70 text-xs font-mono">
          {metadataRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[85px_1fr] items-baseline gap-2 py-2.5">
              <span className="text-[#7A7873] font-medium text-[10.5px] uppercase tracking-wider">
                {row.label}
              </span>
              <span className="text-[#141414] font-medium text-right lg:text-left text-[11.5px] truncate">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact & Action Dispatch Block */}
      <div className="pt-6 mt-6 border-t border-[#E8E6E1]/70 space-y-2.5">
        <span className="text-[10.5px] font-mono text-[#7A7873] uppercase tracking-wider block">
          Direct Channel
        </span>

        {/* Let's Talk Button */}
        <a
          href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry`}
          className="w-full h-10 px-3.5 rounded-xl bg-[#141414] hover:bg-[#FD5D07] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors shadow-xs group"
        >
          <div className="flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{PROFILE_DATA.email}</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Secondary Navigation Link */}
        <button
          onClick={() => onNavigate('works')}
          className="w-full h-9.5 px-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E6E1] hover:border-[#141414] text-[#141414] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
        >
          <span>Explore Works</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873]" />
        </button>
      </div>
    </aside>
  );
};

