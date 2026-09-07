import React from 'react';
import { WorldZone } from '../../types/world';
import { Share2, ExternalLink, Github, Linkedin, Dribbble, Globe } from 'lucide-react';

interface SocialsLinksProps {
  zone: WorldZone;
}

export const SocialsLinks: React.FC<SocialsLinksProps> = () => {
  const links = [
    {
      name: 'Dribbble',
      handle: '@gk_design',
      url: 'https://dribbble.com',
      icon: Dribbble,
      color: '#EA4C89',
      bgColor: 'hover:bg-[#EA4C89]/10'
    },
    {
      name: 'GitHub',
      handle: 'github.com/gk-craft',
      url: 'https://github.com',
      icon: Github,
      color: '#24292F',
      bgColor: 'hover:bg-slate-100'
    },
    {
      name: 'LinkedIn',
      handle: 'in/gk-productdesign',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: '#0A66C2',
      bgColor: 'hover:bg-[#0A66C2]/10'
    },
    {
      name: 'Read.cv',
      handle: 'read.cv/gk',
      url: 'https://read.cv',
      icon: Globe,
      color: '#10B981',
      bgColor: 'hover:bg-emerald-50'
    }
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EA4C89]/10 text-[#EA4C89] flex items-center justify-center border border-[#EA4C89]/20">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              OUTBOUND SIGNALS & SOCIALS
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              DISPATCH NODES • EXTERNAL CHANNELS
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
          4 FREQUENCIES
        </span>
      </div>

      {/* Grid of External Link Badges */}
      <div className="grid grid-cols-2 gap-3 my-auto">
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`p-3 rounded-lg border border-slate-200/80 bg-slate-50/40 transition-all duration-200 ${link.bgColor} group flex items-center justify-between hover:shadow-xs`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center bg-white shadow-2xs border border-slate-200/60"
                  style={{ color: link.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-800 group-hover:text-slate-900">
                    {link.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {link.handle}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
        <span>AUTHENTICATED CHANNELS</span>
        <span className="text-slate-600 font-medium">OPEN IN NEW TAB ↗</span>
      </div>
    </div>
  );
};
