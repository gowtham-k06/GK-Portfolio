import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectCard, CARD_SPRING_TRANSITION } from './ProjectCard';
import { ProjectViewToggle, ViewMode } from './ProjectViewToggle';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onNavigate: (route: string, projectId?: string) => void;
}

// Exactly the 4 prioritized homepage discovery projects
const FEATURED_PROJECT_IDS = [
  'fortune-leadx',
  'strato-crm',
  'strato-hrm',
  'fortune-one-crm',
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Filter only the 4 specified projects in exact order, preserving remaining projects in PROJECTS_DATA
  const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
    PROJECTS_DATA.find((p) => p.id === id)
  ).filter((p): p is Project => p !== undefined);

  return (
    <section id="featured-works" className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 border-b border-[#E8E6E1]">
      <LayoutGroup id="featured-projects">
        {/* Editorial Header Row: [ 4 PROJECTS ] | FEATURED PROJECTS | [ ▤ | ▦ ] */}
        <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-[#E8E6E1] mb-7 sm:mb-9 text-xs font-mono">
          {/* LEFT: [ 4 PROJECTS ] */}
          <div className="text-[#7A7873] uppercase tracking-widest font-medium text-[11px] sm:text-xs">
            [ {featuredProjects.length} PROJECTS ]
          </div>

          {/* CENTER: FEATURED PROJECTS */}
          <h2 className="text-[#141414] font-bold uppercase tracking-[0.2em] text-[12px] sm:text-[13px] text-center">
            FEATURED PROJECTS
          </h2>

          {/* RIGHT: [ list/grid view controls ] */}
          <div className="flex items-center justify-end">
            <ProjectViewToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </div>

        {/* 
          Shared Animated Cards Container:
          The SAME 4 ProjectCard components remain mounted in both grid and vertical layouts.
          Framer Motion FLIP layout animation physically tracks, interpolates, and moves
          each card smoothly between positions (Figma Smart Animate style).
        */}
        <motion.div
          layout
          transition={CARD_SPRING_TRANSITION}
          className={`w-full grid gap-5 lg:gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigate={onNavigate}
              isListView={viewMode === 'list'}
            />
          ))}
        </motion.div>

        {/* Bottom Center: Understated "VIEW ALL PROJECTS" that smoothly animates with the stack */}
        <motion.div
          layout
          transition={CARD_SPRING_TRANSITION}
          className="flex justify-center pt-10 sm:pt-14"
        >
          <button
            type="button"
            onClick={() => onNavigate('works')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E6E3DC] bg-white hover:border-[#141414] hover:bg-[#FAF9F5] text-xs font-mono uppercase tracking-widest text-[#141414] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7873] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </LayoutGroup>
    </section>
  );
};
