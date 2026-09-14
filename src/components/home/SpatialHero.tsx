import React from 'react';
import { SpatialModules } from './SpatialModules';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface SpatialHeroProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const SpatialHero: React.FC<SpatialHeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:pl-16 min-h-[calc(100vh-80px)]">
      {/* Upper Area: Small Visual Objects / Spatial Modules */}
      <div className="flex justify-start lg:justify-end z-20 pb-8 sm:pb-12">
        <SpatialModules onNavigate={onNavigate} />
      </div>

      {/* Center/Lower Area: Massive Oversized Typography */}
      <div className="z-10 mt-auto pt-6 pb-4 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {/* Subtle Lead Label */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#7A7873] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#FD5D07]" />
            <span>HEYYY! I’M GOWTHAM K</span>
            <span className="text-[#B5B2AA]">•</span>
            <span>BENGALURU, INDIA</span>
          </div>

          {/* Huge Dominating Headline */}
          <h1 className="font-display font-bold text-[72px] sm:text-[110px] md:text-[140px] lg:text-[145px] xl:text-[175px] 2xl:text-[205px] leading-[0.82] tracking-tighter text-[#141414] uppercase select-none">
            product designer <br />
            <span className="text-[#7A7873] font-normal">/ ui/ux systems</span>
          </h1>

          {/* Supporting Statement */}
          <div className="pt-2 max-w-2xl">
            <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
              I design and build user-driven digital products, from early concept through production-ready UI experiences. Over 5 years designing, building, and leading product UI systems across high-density enterprise CRM, SaaS platforms, and spatial workflows. Based in Bengaluru, shipping globally.
            </p>
          </div>
        </motion.div>

        {/* Bottom Architectural Scroll Cue */}
        <div className="pt-8 sm:pt-12 flex items-center justify-between border-t border-[#E8E6E1]/70 mt-8 text-xs font-mono text-[#7A7873]">
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

          <div className="hidden sm:flex items-center gap-2">
            <span>ACTIVE FOCUS:</span>
            <span className="font-bold text-[#141414]">FORTUNE LEADX CRM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
