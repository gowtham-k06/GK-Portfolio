import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24 sm:mt-32 border-t border-[#E8E6E1] bg-[#FAF9F5]">
      {/* Editorial Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Top Status Pill */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FD5D07] animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#141414]">
            OPEN FOR WORK
          </span>
        </div>

        {/* Big Editorial Statement */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#141414] leading-[1.2]">
            Available for full-time product design roles, enterprise design systems, and complex interaction design.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#7A7873] max-w-2xl leading-relaxed">
            Have a project in mind or looking to strengthen your product design team? Let’s connect and talk through your vision.
          </p>
        </div>

        {/* Massive Editorial Display Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E8E6E1]">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="group block select-none cursor-pointer"
          >
            <h3 className="font-display text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] leading-[0.85] text-[#141414] group-hover:text-[#FD5D07] transition-colors duration-200 tracking-tight">
              LET'S TALK.
            </h3>
          </a>

          {/* Quick Action CTA Card */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Collaboration%20Inquiry`}
              className="inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-[#141414] hover:bg-[#FD5D07] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{PROFILE_DATA.email}</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-white border border-[#E8E6E1] hover:border-[#141414] text-[#141414] text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Colophon / Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#7A7873]">
          <div>
            <span>{PROFILE_DATA.name}</span>
            <span className="mx-2">•</span>
            <span>{PROFILE_DATA.city}, {PROFILE_DATA.country}</span>
            <span className="mx-2">•</span>
            <span>{PROFILE_DATA.timezone}</span>
          </div>

          <div className="flex items-center gap-6">
            {PROFILE_DATA.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#141414] transition-colors flex items-center gap-1"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#B5B2AA]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};
