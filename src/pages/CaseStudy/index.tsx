import React from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { PROJECTS_DATA } from '../../data/projects';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  projectId?: string;
  onNavigate: (route: string, nextProjectId?: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyProps> = ({
  projectId = 'fortune-leadx',
  onNavigate
}) => {
  const currentProject =
    PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === currentProject.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const sections = currentProject.caseStudySections || {
    research: 'Conducted user interviews, observational studies, and competitor analysis.',
    informationArchitecture: 'Organized functional hierarchies and structured data models.',
    userFlows: 'Mapped step-by-step pathways for high-frequency user actions.',
    designExploration: 'Iterated on layouts, typography density, and component states.',
    finalExperience: 'High-fidelity UI with token-based design systems and responsive states.',
    impact: 'Streamlined task completion times and reduced user friction.',
    reflection: 'Key takeaways in typography hierarchy and systemic reuse.'
  };

  return (
    <PageTransition className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 space-y-14 sm:space-y-20">
      {/* Back Link */}
      <div>
        <button
          onClick={() => onNavigate('works')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7A7873] hover:text-[#141414] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Works</span>
        </button>
      </div>

      {/* 1. Project Identity & Header */}
      <header className="space-y-6 border-b border-[#E8E6E1] pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FD5D07]">
          <span className="font-bold uppercase tracking-widest">{currentProject.tag}</span>
          <span className="text-[#B5B2AA]">•</span>
          <span className="text-[#7A7873] uppercase">{currentProject.timeline}</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#141414] tracking-tight leading-[0.9]">
          {currentProject.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#4A4844] max-w-3xl leading-relaxed">
          {currentProject.subtitle}
        </p>

        {/* Project Metadata Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#E8E6E1] text-xs font-mono">
          <div>
            <span className="text-[#7A7873] block uppercase tracking-wider">ROLE</span>
            <span className="text-[#141414] font-medium mt-1 block">
              {currentProject.role}
            </span>
          </div>
          <div>
            <span className="text-[#7A7873] block uppercase tracking-wider">TEAM</span>
            <span className="text-[#141414] font-medium mt-1 block">
              {currentProject.team}
            </span>
          </div>
          <div>
            <span className="text-[#7A7873] block uppercase tracking-wider">TIMELINE</span>
            <span className="text-[#141414] font-medium mt-1 block">
              {currentProject.timeline}
            </span>
          </div>
          <div>
            <span className="text-[#7A7873] block uppercase tracking-wider">DISCIPLINE</span>
            <span className="text-[#141414] font-medium mt-1 block">
              {currentProject.tags[0]}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Hero Visual Artboard Showcase */}
      <section className="rounded-3xl bg-[#F3F1EC] border border-[#E8E6E1] p-6 sm:p-12 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6E1] text-xs font-mono text-[#7A7873]">
          <span>SYSTEM ARCHITECTURE • INTERFACE BLUEPRINT</span>
          <span className="text-[#FD5D07] font-semibold">{currentProject.title}</span>
        </div>

        <div className="py-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl bg-white rounded-2xl border border-[#E8E6E1] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E6E1]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FD5D07]" />
                <span className="font-mono text-xs font-bold text-[#141414]">
                  {currentProject.title} Console
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#7A7873]">
                PRODUCTION SPEC
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="p-3 bg-[#F3F1EC] rounded-lg border border-[#E8E6E1] text-xs font-mono">
                <span className="text-[#7A7873] block text-[10px]">ORGANIZATION</span>
                <span className="font-bold text-[#141414]">The Fortune Group</span>
              </div>
              <div className="p-3 bg-[#F3F1EC] rounded-lg border border-[#E8E6E1] text-xs font-mono">
                <span className="text-[#7A7873] block text-[10px]">CATEGORY</span>
                <span className="font-bold text-[#141414]">Enterprise CRM</span>
              </div>
              <div className="p-3 bg-[#F3F1EC] rounded-lg border border-[#E8E6E1] text-xs font-mono">
                <span className="text-[#7A7873] block text-[10px]">STATUS</span>
                <span className="font-bold text-emerald-600">Active Deployment</span>
              </div>
            </div>

            <p className="text-xs text-[#4A4844] leading-relaxed">
              {currentProject.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Contribution & Overview */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 01 • OVERVIEW ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            KEY CONTRIBUTIONS
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-[#4A4844] leading-relaxed">
            {currentProject.overview}
          </p>

          <div className="p-5 rounded-2xl bg-[#F3F1EC] border border-[#E8E6E1]">
            <span className="text-xs font-mono font-bold text-[#141414] block mb-3 uppercase tracking-wider">
              MY PRIMARY RESPONSIBILITIES:
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#4A4844]">
              {currentProject.contribution.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FD5D07] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Problem Definition */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 02 • THE PROBLEM ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            THE CHALLENGE
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="text-base text-[#4A4844] leading-relaxed">
            {currentProject.problem}
          </p>
        </div>
      </section>

      {/* 5. Research & Understanding */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 03 • RESEARCH ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            UNDERSTANDING
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="text-base text-[#4A4844] leading-relaxed">
            {sections.research}
          </p>
        </div>
      </section>

      {/* 6. Information Architecture & User Flows */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 04 • STRUCTURE ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            IA & FLOWS
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div>
            <h3 className="text-xs font-mono font-bold text-[#141414] uppercase tracking-wider mb-2">
              INFORMATION ARCHITECTURE
            </h3>
            <p className="text-base text-[#4A4844] leading-relaxed">
              {sections.informationArchitecture}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-[#141414] uppercase tracking-wider mb-2">
              USER PATHWAYS
            </h3>
            <p className="text-base text-[#4A4844] leading-relaxed">
              {sections.userFlows}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Design Exploration & Final Experience */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 05 • CRAFT ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            FINAL EXPERIENCE
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-[#4A4844] leading-relaxed">
            {sections.designExploration}
          </p>
          <p className="text-base text-[#4A4844] leading-relaxed">
            {sections.finalExperience}
          </p>
        </div>
      </section>

      {/* 8. Impact & Reflection */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E6E1] pb-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#FD5D07] uppercase tracking-widest block">
            [ 06 • OUTCOME ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#141414] mt-1">
            IMPACT & REFLECTION
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div>
            <h3 className="text-xs font-mono font-bold text-[#141414] uppercase tracking-wider mb-2">
              OPERATIONAL IMPACT
            </h3>
            <p className="text-base text-[#4A4844] leading-relaxed">
              {sections.impact}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-[#141414] uppercase tracking-wider mb-2">
              DESIGN RETROSPECTIVE
            </h3>
            <p className="text-base text-[#4A4844] leading-relaxed">
              {sections.reflection}
            </p>
          </div>
        </div>
      </section>

      {/* 9. Next Project Navigation */}
      <section className="pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F3F1EC] border border-[#E8E6E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#7A7873] uppercase tracking-wider">
              UP NEXT
            </span>
            <h4 className="font-display text-3xl sm:text-5xl text-[#141414] mt-1">
              {nextProject.title}
            </h4>
            <p className="text-xs text-[#4A4844] mt-1">{nextProject.subtitle}</p>
          </div>
          <button
            onClick={() => onNavigate('case-study', nextProject.id)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] hover:bg-[#FD5D07] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider transition-all"
          >
            <span>View Next Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
