import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Mail, ArrowUpRight } from 'lucide-react';

interface IdentityRailProps {
  onNavigate: (route: string) => void;
}

export const IdentityRail: React.FC<IdentityRailProps> = ({ onNavigate }) => {
  const metadataRows = [
    { label: 'Location', value: PROFILE_DATA.location },
    { label: 'Timezone', value: PROFILE_DATA.timezone },
    { label: 'Experience', value: '4 Roles (2023–Present)' },
    { label: 'Current Org', value: 'The Fortune Group' },
    { label: 'Focus', value: 'SaaS, CRM, Systems' },
    { label: 'Tooling', value: 'Figma, Design Systems, Web UI' },
  ];

  return (
    <aside className="w-full lg:w-80 xl:w-88 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-[#E8E6E1] flex flex-col justify-between p-6 sm:p-8">
      <div className="space-y-6">
        {/* Profile Card Top Block */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#E8E6E1]/70">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF9F5] border-2 border-[#E8E6E1] flex items-center justify-center font-display text-2xl font-bold text-[#141414] shrink-0 shadow-2xs hover:border-[#FD5D07] transition-colors">
            GK
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-[#141414] tracking-tight truncate leading-tight">
              {PROFILE_DATA.name}
            </h2>
            <div className="inline-flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-[#7A7873] font-medium">
                {PROFILE_DATA.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Short Personal Introduction */}
        <p className="text-xs sm:text-sm text-[#4A4844] leading-relaxed">
          Product and interaction designer focused on <strong className="text-[#141414] font-semibold">SaaS, CRM, enterprise products</strong>, interaction design and complex digital workflows. Based in Bengaluru, shipping globally.
        </p>

        {/* Structured Metadata Grid Rows */}
        <div className="divide-y divide-[#E8E6E1]/70 border-y border-[#E8E6E1]/70 text-xs font-mono">
          {metadataRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[85px_1fr] items-baseline gap-3 py-2.5">
              <span className="text-[#7A7873] font-medium text-[11px] uppercase tracking-wider">
                {row.label}
              </span>
              <span className="text-[#141414] font-medium text-right lg:text-left truncate">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact & Action Dispatch Block */}
      <div className="pt-6 mt-6 border-t border-[#E8E6E1]/70 space-y-3">
        <span className="text-[11px] font-mono text-[#7A7873] uppercase tracking-wider block">
          Direct Channel
        </span>

        {/* Let's Talk Button */}
        <a
          href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry`}
          className="w-full h-11 px-4 rounded-full bg-[#141414] hover:bg-[#FD5D07] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-xs"
        >
          <div className="flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{PROFILE_DATA.email}</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </a>

        {/* Secondary Navigation Link */}
        <button
          onClick={() => onNavigate('works')}
          className="w-full h-10 px-4 rounded-full bg-[#FAF9F5] border border-[#E8E6E1] hover:border-[#141414] text-[#141414] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
        >
          <span>Explore Works</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873]" />
        </button>
      </div>
    </aside>
  );
};
