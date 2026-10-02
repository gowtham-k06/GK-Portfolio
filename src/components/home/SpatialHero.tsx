import React from 'react';
import { SpatialModules } from './SpatialModules';
import { ArrowDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface SpatialHeroProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const SpatialHero: React.FC<SpatialHeroProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 relative overflow-hidden flex flex-col justify-between min-h-[calc(100vh-80px)] bg-[#FAF9F5]">
      {/* Subtle architectural ambient hatch texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] editorial-hatch select-none" />

      {/* Subtle vertical architectural grid division lines (visible on wide desktop) */}
      <div className="absolute top-0 bottom-0 left-[275px] w-px bg-[#E8E6E1]/50 hidden 2xl:block pointer-events-none select-none" />
      <div className="absolute top-0 bottom-0 left-[820px] w-px bg-[#E8E6E1]/50 hidden 2xl:block pointer-events-none select-none" />

      {/* Top Architectural Dispatch / Meta Bar */}
      <div className="relative z-10 w-full flex items-center justify-between py-4 px-6 sm:px-10 lg:px-12 border-b border-[#E8E6E1]/60 text-xs font-mono text-[#7A7873]">
        <div className="flex items-center gap-2 uppercase tracking-wider text-[11px] font-semibold text-[#141414]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FD5D07]" />
          <span>GOWTHAM K &mdash; PRODUCT & INTERACTION DESIGNER</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E6E1] text-[11px] font-mono text-[#141414] shadow-2xs">
          <MapPin className="w-3 h-3 text-[#FD5D07]" />
          <span>Bengaluru, India</span>
          <span className="text-[#B5B2AA]">&bull;</span>
          <span className="text-[#7A7873]">IST (UTC+05:30)</span>
        </div>
      </div>

      {/* Upper Area: Small Visual Objects / Spatial Modules (Cluster) */}
      {/* On ~1900px desktop: left panel ends at x=455. 2xl:pl-[275px] starts cluster at x=730. Cluster width is 545px, ending at x=1275 */}
      <div className="relative z-20 pt-8 sm:pt-10 lg:pt-12 px-6 sm:px-10 lg:px-12 2xl:pl-[275px] xl:pl-[140px] lg:pl-[50px] flex justify-start">
        <SpatialModules onNavigate={onNavigate} />
      </div>

      {/* Lower Area: Giant Typographic Hero anchoring the composition */}
      <div className="relative z-10 mt-auto pt-8 sm:pt-12 lg:pt-14 px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {/* Subtle Lead Label */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#7A7873] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#FD5D07]" />
            <span>[ 00 &bull; INTRODUCTION ]</span>
            <span className="text-[#B5B2AA]">&bull;</span>
            <span>SCALE &bull; CRM &bull; SYSTEMS</span>
          </div>

          {/* Huge Dominating Headline */}
          <h1 className="font-display font-bold text-[76px] sm:text-[115px] md:text-[145px] lg:text-[165px] xl:text-[195px] 2xl:text-[230px] leading-[0.78] tracking-tighter text-[#141414] uppercase select-none">
            <span>PRODUCT DESIGNER</span>
            <br />
            <span className="text-[#7A7873] font-normal">/ UI/UX SYSTEMS</span>
          </h1>

          {/* Supporting Statement */}
          <div className="pt-2 max-w-2xl">
            <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
              I design and architect user-driven enterprise CRM software, high-throughput data platforms, and scalable Figma design systems. Over 5 years bridging product strategy with engineering implementation. Based in Bengaluru, shipping globally.
            </p>
          </div>
        </motion.div>

        {/* Bottom Architectural Scroll Cue */}
        <div className="pt-6 sm:pt-8 flex items-center justify-between border-t border-[#E8E6E1]/70 mt-6 sm:mt-8 text-xs font-mono text-[#7A7873]">
          <div
            onClick={() => {
              const el = document.getElementById('featured-works');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer hover:text-[#141414] transition-colors group"
          >
            <span className="font-bold text-[#141414] uppercase">[ scroll ]</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#FD5D07] group-hover:translate-y-1 transition-transform animate-bounce" />
          </div>

          <div className="flex items-center gap-2 text-[#7A7873]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ACTIVE FOCUS:</span>
            <strong className="text-[#141414] font-medium">FORTUNE LEADX CRM</strong>
            <span className="hidden sm:inline text-[#B5B2AA]">&bull;</span>
            <span className="hidden sm:inline">THE FORTUNE GROUP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

