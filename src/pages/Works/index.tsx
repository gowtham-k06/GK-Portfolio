import React, { useState } from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { PROJECTS_DATA } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface WorksPageProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'case-study' | 'selected'>('all');

  const caseStudies = PROJECTS_DATA.filter((p) => p.category === 'case-study');
  const selectedWorks = PROJECTS_DATA.filter((p) => p.category === 'selected');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section className="border-b border-[#E8E6E1] pb-10 sm:pb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FD5D07] block">
              [ INDEX OF WORKS • 2023–2026 ]
            </span>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#141414] tracking-tight mt-1">
              WORKS
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
              A curated catalog of enterprise SaaS tools, complex workflow platforms, design system tokens, and editorial digital experiences.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-8 pt-6 border-t border-[#E8E6E1] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#141414] text-[#FAF9F5]'
                  : 'bg-[#F3F1EC] text-[#4A4844] hover:text-[#141414]'
              }`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('case-study')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                activeFilter === 'case-study'
                  ? 'bg-[#141414] text-[#FAF9F5]'
                  : 'bg-[#F3F1EC] text-[#4A4844] hover:text-[#141414]'
              }`}
            >
              Case Studies ({caseStudies.length})
            </button>
            <button
              onClick={() => setActiveFilter('selected')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                activeFilter === 'selected'
                  ? 'bg-[#141414] text-[#FAF9F5]'
                  : 'bg-[#F3F1EC] text-[#4A4844] hover:text-[#141414]'
              }`}
            >
              Selected Work ({selectedWorks.length})
            </button>
          </div>

          <span className="text-xs font-mono text-[#7A7873]">
            SHOWING: {filteredProjects.length} ITEMS
          </span>
        </div>
      </section>

      {/* SECTION 1: IN-DEPTH CASE STUDIES */}
      {(activeFilter === 'all' || activeFilter === 'case-study') && (
        <section className="space-y-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
              [ SECTION 01 ]
            </span>
            <div className="h-px flex-1 bg-[#E8E6E1]" />
            <span className="font-mono text-xs text-[#7A7873] uppercase">
              IN-DEPTH CASE STUDIES
            </span>
          </div>

          <div className="space-y-14">
            {caseStudies.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onNavigate('case-study', project.id)}
                className="group border border-[#E8E6E1] bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#141414]/50 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Left Frame */}
                  <div className="lg:col-span-7 bg-[#F3F1EC] p-8 sm:p-12 flex flex-col justify-between min-h-[360px] border-b lg:border-b-0 lg:border-r border-[#E8E6E1]">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E6E1] font-mono text-[10px] uppercase tracking-wider font-semibold text-[#141414]">
                        CASE STUDY 0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-[#7A7873]">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Visual Artboard Wireframe / Representation */}
                    <div className="my-8 p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E6E1] shadow-2xs group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] font-mono text-xs">
                        <span className="font-bold text-[#141414]">{project.title}</span>
                        <span className="text-[#FD5D07] font-semibold">{project.tag}</span>
                      </div>
                      <p className="text-xs text-[#4A4844] mt-3 leading-relaxed">
                        {project.subtitle}
                      </p>
                      <div className="mt-4 pt-3 border-t border-[#E8E6E1]/60 flex items-center justify-between text-[11px] font-mono text-[#7A7873]">
                        <span>ROLE: {project.role}</span>
                        <span>TEAM: {project.team}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#7A7873]">
                      <span>READ COMPREHENSIVE ARCHITECTURE</span>
                      <span className="text-[#FD5D07] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Launch Case Study →
                      </span>
                    </div>
                  </div>

                  {/* Metadata Right Frame */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-6">
                      <div>
                        <span className="font-mono text-xs text-[#FD5D07] font-semibold uppercase tracking-wider">
                          {project.tag}
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl text-[#141414] mt-1 tracking-tight">
                          {project.title}
                        </h2>
                        <p className="text-sm text-[#4A4844] mt-2 leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#E8E6E1]">
                        <div>
                          <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block">
                            CORE CHALLENGE
                          </span>
                          <p className="text-xs text-[#4A4844] mt-1 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block">
                            DELIVERED OUTCOME
                          </span>
                          <p className="text-xs text-[#141414] font-medium mt-1 leading-relaxed">
                            {project.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Contribution List */}
                      <div className="pt-4 border-t border-[#E8E6E1]">
                        <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block mb-2">
                          KEY CONTRIBUTIONS
                        </span>
                        <ul className="space-y-1 text-xs text-[#4A4844]">
                          {project.contribution.map((item, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="text-[#FD5D07] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E8E6E1] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#7A7873]">
                        {project.tags.slice(0, 2).join(' • ')}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#141414] group-hover:text-[#FD5D07] transition-colors">
                        View Study
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: SELECTED WORK */}
      {(activeFilter === 'all' || activeFilter === 'selected') && (
        <section className="space-y-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FD5D07]">
              [ SECTION 02 ]
            </span>
            <div className="h-px flex-1 bg-[#E8E6E1]" />
            <span className="font-mono text-xs text-[#7A7873] uppercase">
              SELECTED PRODUCTION WORK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWorks.map((work) => (
              <article
                key={work.id}
                onClick={() => onNavigate('case-study', work.id)}
                className="group border border-[#E8E6E1] bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#141414]/40 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1] font-mono text-[11px] text-[#7A7873]">
                    <span className="text-[#FD5D07] font-semibold">{work.tag}</span>
                    <span>{work.timeline}</span>
                  </div>

                  {/* Wireframe Mock Area */}
                  <div className="my-6 p-6 rounded-xl bg-[#F3F1EC] border border-[#E8E6E1] group-hover:scale-[1.01] transition-transform">
                    <h4 className="text-xs font-mono font-bold text-[#141414]">
                      {work.title}
                    </h4>
                    <p className="text-xs text-[#7A7873] mt-1">{work.role}</p>
                    <div className="mt-4 flex gap-1.5 flex-wrap">
                      {work.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-[#4A4844] border border-[#E8E6E1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-[#141414] group-hover:text-[#FD5D07] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm font-medium text-[#4A4844] mt-2">
                    {work.subtitle}
                  </p>
                  <p className="text-xs text-[#7A7873] mt-3 leading-relaxed">
                    {work.problem}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E6E1] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#7A7873]">ROLE: {work.role}</span>
                  <span className="font-bold text-[#141414] group-hover:text-[#FD5D07] flex items-center gap-1 transition-colors">
                    Inspect Work
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </PageTransition>
  );
};
