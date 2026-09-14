import React from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { PROFILE_DATA } from '../../data/profile';
import { EXPERIENCE_DATA, EXPERTISE_AREAS, DESIGN_PHILOSOPHY } from '../../data/experience';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 space-y-16 sm:space-y-24">
      {/* 1. Large Introduction & Professional Identity */}
      <section className="border-b border-[#E8E6E1] pb-12 sm:pb-16">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#FD5D07] uppercase tracking-widest mb-4">
          <span>[ 02 • ABOUT ]</span>
          <span className="text-[#B5B2AA]">•</span>
          <span className="text-[#7A7873]">BENGALURU, INDIA</span>
        </div>

        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#141414] tracking-tight leading-[0.88]">
          ABOUT GK
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 sm:pt-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#141414] leading-snug">
              Designing calm, tactile, and high-density software systems for complex enterprise problems.
            </h2>
            {PROFILE_DATA.extendedBio.map((paragraph, idx) => (
              <p key={idx} className="text-base text-[#4A4844] leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Quick Resume CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download simulated: GK_Product_Designer_Resume_2026.pdf');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#FD5D07] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E6E1] hover:border-[#141414] text-[#141414] text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>Send Direct Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Profile Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#F3F1EC] border border-[#E8E6E1] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] text-xs font-mono">
              <span className="text-[#7A7873]">PROFILE SPEC</span>
              <span className="text-[#FD5D07] font-bold">2026 EDITION</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[#E8E6E1]/60">
                <span className="text-[#7A7873]">FULL NAME</span>
                <span className="text-[#141414] font-medium">{PROFILE_DATA.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E8E6E1]/60">
                <span className="text-[#7A7873]">LOCATION</span>
                <span className="text-[#141414] font-medium">{PROFILE_DATA.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E8E6E1]/60">
                <span className="text-[#7A7873]">ROLE</span>
                <span className="text-[#141414] font-medium">{PROFILE_DATA.role}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E8E6E1]/60">
                <span className="text-[#7A7873]">TIMEZONE</span>
                <span className="text-[#141414] font-medium">{PROFILE_DATA.timezone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7A7873]">STATUS</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {PROFILE_DATA.availability}
                </span>
              </div>
            </div>

            {/* Core Tooling Stack */}
            <div className="pt-4 border-t border-[#E8E6E1]">
              <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block mb-2">
                CORE TOOLING & WORKFLOW
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE_DATA.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white border border-[#E8E6E1] text-[11px] font-mono text-[#4A4844]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Chronological Real Experience Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
            [ TIMELINE ]
          </span>
          <div className="h-px flex-1 bg-[#E8E6E1]" />
          <span className="font-mono text-xs text-[#7A7873] uppercase">
            PROFESSIONAL EXPERIENCE
          </span>
        </div>

        <div className="divide-y divide-[#E8E6E1] border-y border-[#E8E6E1]">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <article
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-[#F3F1EC]/30 transition-colors px-2 sm:px-4 rounded-xl"
            >
              <div className="lg:col-span-4 space-y-1">
                <span className="text-xs font-mono text-[#FD5D07] font-semibold">
                  {exp.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A7873]">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
                      CURRENT
                    </span>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <h4 className="font-mono text-sm font-semibold text-[#141414] uppercase tracking-wider">
                  {exp.role}
                </h4>
                <p className="text-sm text-[#4A4844] leading-relaxed">
                  {exp.description}
                </p>

                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-[#F3F1EC] text-[10px] font-mono text-[#4A4844]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Areas of Expertise */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
            [ EXPERTISE ]
          </span>
          <div className="h-px flex-1 bg-[#E8E6E1]" />
          <span className="font-mono text-xs text-[#7A7873] uppercase">
            CORE DISCIPLINES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERTISE_AREAS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E6E1] space-y-3"
            >
              <span className="font-mono text-xs text-[#FD5D07] font-semibold">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-[#141414]">{item.title}</h3>
              <p className="text-sm text-[#4A4844] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Design Philosophy */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
            [ PRINCIPLES ]
          </span>
          <div className="h-px flex-1 bg-[#E8E6E1]" />
          <span className="font-mono text-xs text-[#7A7873] uppercase">
            DESIGN PHILOSOPHY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESIGN_PHILOSOPHY.map((phil) => (
            <div
              key={phil.number}
              className="p-6 sm:p-8 rounded-2xl bg-[#F3F1EC] border border-[#E8E6E1] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#7A7873] font-bold block mb-2">
                  [ {phil.number} ]
                </span>
                <h3 className="text-base font-bold text-[#141414]">
                  {phil.principle}
                </h3>
                <p className="text-xs text-[#4A4844] mt-2 leading-relaxed">
                  {phil.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
