import React from 'react';
import { WorldZone } from '../../types/world';
import { Briefcase, TrendingUp, Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  zone: WorldZone;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = () => {
  const milestones = [
    {
      role: 'Staff Product Designer',
      company: 'NextGen Design Systems',
      period: '2024 — Present',
      badge: 'CURRENT',
      badgeColor: 'bg-violet-100 text-violet-700 border-violet-300',
      description: 'Spearheading design tokens, spatial workspace UI, and developer-designer sync tooling.',
      metric: '40+ Core Components'
    },
    {
      role: 'Senior UX/UI Designer',
      company: 'HyperScale Fintech',
      period: '2022 — 2024',
      badge: 'GROWTH',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
      description: 'Architected high-throughput trading terminals and multi-asset portfolio visualization.',
      metric: '$2.4B Volume Managed'
    },
    {
      role: 'Product & Interaction Designer',
      company: 'Creative Labs Digital',
      period: '2021 — 2022',
      badge: 'FOUNDATION',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-300',
      description: 'Designed consumer apps, design sprint frameworks, and micro-interaction prototypes.',
      metric: '180K+ Active Users'
    }
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center border border-[#7B61FF]/20">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              CHRONOLOGY & EXPEDITIONS
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              TRACK: 5 YEARS IN PRODUCT CRAFT
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
          <Calendar className="w-3 h-3 text-[#7B61FF]" />
          <span>2021 — 2026</span>
        </div>
      </div>

      {/* Timeline Winding Roadmap */}
      <div className="relative my-auto space-y-4 pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#7B61FF] before:via-indigo-300 before:to-slate-200">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Point */}
            <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#7B61FF] shadow-xs flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
            </div>

            <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#7B61FF]/40 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-800 text-xs tracking-tight">
                    {m.role}
                  </h3>
                  <span className="text-slate-400 text-xs">@ {m.company}</span>
                </div>
                <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded border ${m.badgeColor}`}>
                  {m.badge}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {m.description}
              </p>

              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                <span>{m.period}</span>
                <span className="text-[#7B61FF] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {m.metric}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
        <span>TIMELINE ROUTE #03</span>
        <span className="text-slate-600 font-medium">CLICK FOR DEEP DIVE</span>
      </div>
    </div>
  );
};
