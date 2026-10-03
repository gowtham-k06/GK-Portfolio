import React from 'react';
import { motion, Transition } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { ProjectPreview } from './ProjectPreview';
import { ArrowUpRight } from 'lucide-react';

export const CARD_SPRING_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 34,
  mass: 0.9,
};

interface ProjectCardProps {
  project: Project;
  onNavigate: (route: string, projectId?: string) => void;
  isListView?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onNavigate,
  isListView = false,
}) => {
  const handleClick = () => {
    onNavigate('case-study', project.id);
  };

  return (
    <motion.article
      layout
      transition={CARD_SPRING_TRANSITION}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      whileHover={{ y: -3 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View ${project.title} project details`}
      className="group relative w-full bg-white rounded-[22px] sm:rounded-[24px] border border-[#E6E3DC] hover:border-[#141414]/40 p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer shadow-[0_2px_8px_rgba(20,20,20,0.03)] hover:shadow-[0_16px_36px_rgba(20,20,20,0.08)] focus:outline-hidden focus:ring-2 focus:ring-[#141414]/20 select-none overflow-hidden"
    >
      {/* Visual Preview Container (~82% of card visual area) - Animated smoothly with layout */}
      <motion.div
        layout
        transition={CARD_SPRING_TRANSITION}
        className={`w-full rounded-[16px] sm:rounded-[18px] overflow-hidden bg-[#FAF9F5] border border-[#ECE9E2] relative ${
          isListView
            ? 'h-[320px] sm:h-[360px] lg:h-[390px]'
            : 'h-[300px] sm:h-[340px] lg:h-[370px]'
        }`}
      >
        <ProjectPreview projectId={project.id} />
      </motion.div>

      {/* Bottom Title & Action Row (~52px tall) - Stays attached and moves with the card */}
      <motion.div
        layout
        transition={CARD_SPRING_TRANSITION}
        className="h-[50px] sm:h-[54px] px-2 sm:px-2.5 flex items-center justify-between gap-3"
      >
        {/* Project Name at Bottom-Left */}
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#141414] tracking-tight truncate leading-tight group-hover:text-[#FD5D07] transition-colors">
            {project.title}
          </h3>
          <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 rounded-sm bg-[#F3F1EC] text-[10px] font-mono text-[#7A7873] uppercase tracking-wider shrink-0">
            {project.category === 'case-study' ? 'Case Study' : 'Craft'}
          </span>
        </div>

        {/* "View ↗" CTA at Bottom-Right */}
        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#141414] bg-[#F4F2EE] group-hover:bg-[#141414] group-hover:text-white transition-colors duration-200 shrink-0">
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </motion.div>
    </motion.article>
  );
};
