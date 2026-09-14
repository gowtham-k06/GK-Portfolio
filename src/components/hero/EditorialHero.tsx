import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';
import { EXPERIENCE_DATA } from '../../data/experience';
import { PLAYGROUND_DATA } from '../../data/playground';
import { ArrowUpRight, ArrowDownRight, MapPin, Sparkles, MoveRight } from 'lucide-react';
import { EditorialLoader } from './EditorialLoader';

interface EditorialHeroProps {
  onNavigate: (route: string, projectId?: string) => void;
  skipLoader?: boolean;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onNavigate,
  skipLoader = false,
}) => {
  const [loaded, setLoaded] = useState(skipLoader);

  const facts = [
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Timezone', value: 'IST (UTC+05:30)' },
    { label: 'Experience', value: `${EXPERIENCE_DATA.length} Roles (2023–Present)` },
    { label: 'Current Org', value: 'The Fortune Group' },
    { label: 'Focus', value: 'SaaS, CRM, Systems' },
    { label: 'Tooling', value: 'Figma, Tokens, Web UI' },
  ];

  const quickLinks = [
    {
      title: 'Lead Project · Fortune LeadX CRM',
      action: () => onNavigate('case-study', 'fortune-leadx'),
    },
    {
      title: 'Professional Chronology & Ethos',
      action: () => onNavigate('about'),
    },
    {
      title: 'Interactive Playground & Sandbox',
      action: () => onNavigate('playground'),
    },
  ];

  return (
    <div className="w-full relative">
      {/* Fast entrance loader on initial visit */}
      {!skipLoader && <EditorialLoader onComplete={() => setLoaded(true)} />}

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12"
        aria-label="Introduction"
      >
        {/* Left Column: Profile Card (Architectural Sidebar) */}
        <motion.aside
          className="w-full lg:w-[380px] xl:w-[420px] shrink-0 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E6E1] shadow-xs flex flex-col justify-between space-y-6"
          variants={container}
          initial="hidden"
          animate={loaded ? 'show' : 'hidden'}
        >
          {/* Profile Header */}
          <motion.div className="flex items-center gap-4 pb-4 border-b border-[#E8E6E1]" variants={item}>
            <div
              className="w-14 h-14 rounded-2xl bg-[#141414] text-[#FAF9F5] flex items-center justify-center font-display text-3xl font-bold tracking-wider hover:bg-[#FD5D07] transition-colors cursor-pointer"
              aria-hidden="true"
              onClick={() => onNavigate('about')}
            >
              GK
            </div>
            <div>
              <p className="text-base font-bold text-[#141414] tracking-tight">
                {PROFILE_DATA.name}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#7A7873] mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-semibold">{PROFILE_DATA.availability}</span>
              </span>
            </div>
          </motion.div>

          {/* Short Bio */}
          <motion.p className="text-sm text-[#4A4844] leading-relaxed" variants={item}>
            {PROFILE_DATA.editorialIntro}
          </motion.p>

          {/* Fact Grid (<dl>) */}
          <motion.dl
            className="grid grid-cols-2 gap-x-4 gap-y-3.5 py-4 border-y border-[#E8E6E1] text-xs font-mono"
            variants={item}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5">
                <dt className="text-[10px] uppercase text-[#7A7873] tracking-wider">{fact.label}</dt>
                <dd className="m-0 font-medium text-[#141414] truncate">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Contact & Primary CTA Block */}
          <motion.div className="flex flex-col gap-3" variants={item}>
            <div className="flex items-baseline justify-between text-xs font-mono">
              <span className="text-[#7A7873]">DIRECT CHANNEL</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-[#141414] hover:text-[#FD5D07] font-medium transition-colors"
              >
                {PROFILE_DATA.email}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => onNavigate('case-study', 'fortune-leadx')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-[#FD5D07] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>LeadX Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry`}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF9F5] border border-[#E8E6E1] hover:border-[#141414] text-[#141414] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873]" />
              </a>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div className="flex items-center justify-between pt-4 border-t border-[#E8E6E1] text-xs font-mono" variants={item}>
            <div>
              <span className="text-xl font-bold font-display text-[#141414] block leading-none">
                0{EXPERIENCE_DATA.length}
              </span>
              <span className="text-[10px] text-[#7A7873] uppercase tracking-wider">Career Roles</span>
            </div>
            <div className="w-px h-6 bg-[#E8E6E1]" />
            <div>
              <span className="text-xl font-bold font-display text-[#141414] block leading-none">
                0{PROJECTS_DATA.length}
              </span>
              <span className="text-[10px] text-[#7A7873] uppercase tracking-wider">Case Studies</span>
            </div>
            <div className="w-px h-6 bg-[#E8E6E1]" />
            <div>
              <span className="text-xl font-bold font-display text-[#FD5D07] block leading-none">
                0{PLAYGROUND_DATA.length}
              </span>
              <span className="text-[10px] text-[#7A7873] uppercase tracking-wider">Crafts & Lab</span>
            </div>
          </motion.div>

          {/* Quick Route Links */}
          <motion.div className="space-y-2 pt-2" variants={item}>
            {quickLinks.map((link) => (
              <button
                key={link.title}
                onClick={link.action}
                className="w-full p-2.5 rounded-xl border border-[#E8E6E1] hover:border-[#141414]/40 hover:bg-[#F3F1EC]/50 text-left flex items-center justify-between text-xs font-mono text-[#4A4844] hover:text-[#141414] transition-all group cursor-pointer"
              >
                <span>{link.title}</span>
                <MoveRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:translate-x-1 group-hover:text-[#FD5D07] transition-all" />
              </button>
            ))}
          </motion.div>
        </motion.aside>

        {/* Right Column: Editorial Headline Stage */}
        <div className="flex-1 rounded-3xl bg-white border border-[#E8E6E1] p-8 sm:p-12 lg:p-14 relative overflow-hidden flex flex-col justify-between min-h-[540px] shadow-xs">
          {/* Subtle architectural ambient texture */}
          <div className="absolute inset-0 pointer-events-none opacity-40 editorial-hatch" />

          {/* Subtle warm glow circle */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FD5D07]/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Location & Timezone Badge */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#E8E6E1]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FD5D07] font-semibold uppercase tracking-wider">
              <span>[ 00 • DISPATCH ]</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E6E1] text-[11px] font-mono text-[#141414]">
              <MapPin className="w-3 h-3 text-[#FD5D07]" />
              <span>{PROFILE_DATA.city}, {PROFILE_DATA.country}</span>
              <span className="text-[#B5B2AA]">•</span>
              <span className="text-[#7A7873]">{PROFILE_DATA.timezone}</span>
            </div>
          </div>

          {/* Main Stage Typography Content */}
          <motion.div
            className="relative z-10 my-auto py-10 space-y-4"
            variants={container}
            initial="hidden"
            animate={loaded ? 'show' : 'hidden'}
          >
            <motion.p
              className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#7A7873] uppercase"
              variants={item}
            >
              GOWTHAM K — PRODUCT & INTERACTION DESIGNER
            </motion.p>

            <motion.h1
              className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[112px] xl:text-[124px] leading-[0.88] tracking-tight text-[#141414] uppercase flex flex-col"
              variants={item}
            >
              <span>PRODUCT DESIGNER</span>
              <span className="text-[#7A7873] font-normal">/ UI/UX SYSTEMS</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#4A4844] max-w-2xl leading-relaxed pt-2"
              variants={item}
            >
              I architect user-driven enterprise CRM software, high-throughput data platforms, and scalable Figma design systems. Over 5 years designing, refining, and bridging the gap between product strategy and engineering implementation.
            </motion.p>
          </motion.div>

          {/* Bottom Indicators: Now Designing Status + Scroll Cue */}
          <div className="relative z-10 pt-6 border-t border-[#E8E6E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            {/* Now Designing Indicator */}
            <div className="flex items-center gap-2 text-[#7A7873]">
              <span className="w-2 h-2 rounded-full bg-[#FD5D07] animate-pulse" />
              <span>
                Active Focus · <strong className="text-[#141414] font-medium">Fortune LeadX CRM</strong> at The Fortune Group
              </span>
            </div>

            {/* Scroll Cue */}
            <motion.div
              className="flex items-center gap-2 text-[#7A7873] cursor-pointer hover:text-[#141414] transition-colors"
              onClick={() => {
                const el = document.getElementById('featured-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="w-6 h-px bg-[#7A7873]" />
              <span className="uppercase tracking-wider text-[11px] font-semibold">
                Explore Works [ 01 ]
              </span>
              <ArrowDownRight className="w-3.5 h-3.5 text-[#FD5D07]" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
