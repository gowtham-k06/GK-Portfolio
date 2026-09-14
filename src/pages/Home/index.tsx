import React from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { PROJECTS_DATA } from '../../data/projects';
import { PLAYGROUND_DATA } from '../../data/playground';
import { IdentityRail } from '../../components/home/IdentityRail';
import { SpatialHero } from '../../components/home/SpatialHero';
import { ArrowUpRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const featuredPlayground = PLAYGROUND_DATA.slice(0, 3);

  return (
    <PageTransition className="w-full">
      {/* Outer Architectural Container matching reference */}
      <div className="container mx-auto sm:border-x border-[#E8E6E1] bg-[#FAF9F5]">
        {/* SPATIAL TWO-ZONE HERO: Identity Rail + Creative Canvas */}
        <section className="flex flex-col lg:flex-row border-b border-[#E8E6E1]">
          {/* Left Persistent Identity Rail */}
          <IdentityRail onNavigate={onNavigate} />

          {/* Vertical Architectural Hatch Column Divider */}
          <div className="hidden sm:inline-flex w-8 lg:w-9.5 shrink-0 border-r border-[#E8E6E1] overflow-hidden select-none">
            <div className="w-full h-full opacity-20 editorial-hatch min-h-[500px]" />
          </div>

          {/* Right Creative Canvas Area */}
          <div className="flex-1 relative overflow-hidden flex flex-col justify-between">
            <SpatialHero onNavigate={onNavigate} />
          </div>

          {/* Right Architectural Boundary Hatch Column */}
          <div className="hidden xl:inline-flex w-8 lg:w-9.5 shrink-0 border-l border-[#E8E6E1] overflow-hidden select-none">
            <div className="w-full h-full opacity-20 editorial-hatch min-h-[500px]" />
          </div>
        </section>

        {/* Featured Works Section */}
        <section id="featured-works" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[#E8E6E1]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FD5D07]">
                [ 01 • SELECTED CASE STUDIES ]
              </span>
              <h3 className="font-display text-4xl sm:text-6xl text-[#141414] mt-1 tracking-tight">
                FEATURED PROJECTS
              </h3>
            </div>
            <button
              onClick={() => onNavigate('works')}
              className="group flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-[#141414] hover:text-[#FD5D07] transition-colors"
            >
              <span>View all projects ({PROJECTS_DATA.length})</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Editorial Project Showcase List */}
          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onNavigate('case-study', project.id)}
                className="group border border-[#E8E6E1] bg-white hover:border-[#141414]/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Canvas Area */}
                  <div className="lg:col-span-7 bg-[#F3F1EC] p-6 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[420px] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E8E6E1]">
                    {/* Top Frame Tag */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#E8E6E1] font-mono text-[10px] text-[#4A4844] uppercase tracking-wider font-semibold">
                        FRAME 0{idx + 1} • {project.tag}
                      </span>
                      <span className="font-mono text-xs text-[#7A7873]">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Visual Centerpiece Mockup */}
                    <div className="my-auto py-8 relative">
                      <div className="w-full bg-[#FAF9F5] rounded-xl border border-[#E8E6E1] p-5 shadow-xs group-hover:scale-[1.01] transition-transform duration-300">
                        <div className="flex items-center justify-between pb-3 border-b border-[#E8E6E1]">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FD5D07]/20 border border-[#FD5D07]" />
                            <span className="text-xs font-mono font-bold text-[#141414]">
                              {project.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#7A7873]">
                            {project.role}
                          </span>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          <div className="h-2 bg-[#E8E6E1] rounded w-3/4" />
                          <div className="h-2 bg-[#F3F1EC] rounded w-full" />
                          <div className="h-2 bg-[#F3F1EC] rounded w-5/6" />
                        </div>

                        {/* Mock Data Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-[#E8E6E1]/60">
                          <div className="p-2 rounded bg-white border border-[#E8E6E1] text-[10px] font-mono">
                            <span className="text-[#7A7873] block">DISCIPLINE</span>
                            <span className="font-semibold text-[#141414]">Enterprise UX</span>
                          </div>
                          <div className="p-2 rounded bg-white border border-[#E8E6E1] text-[10px] font-mono">
                            <span className="text-[#7A7873] block">PLATFORM</span>
                            <span className="font-semibold text-[#141414]">Web / SaaS</span>
                          </div>
                          <div className="p-2 rounded bg-white border border-[#E8E6E1] text-[10px] font-mono">
                            <span className="text-[#7A7873] block">TOOLING</span>
                            <span className="font-semibold text-[#141414]">Figma Tokens</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Hover Affordance */}
                    <div className="flex items-center justify-between pt-4 text-xs font-mono text-[#7A7873]">
                      <span>INSPECT CASE STUDY</span>
                      <span className="text-[#FD5D07] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Architecture →
                      </span>
                    </div>
                  </div>

                  {/* Editorial Metadata & Narrative Column */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                    <div className="space-y-5">
                      <div>
                        <span className="font-mono text-xs text-[#FD5D07] font-semibold uppercase tracking-wider block">
                          {project.tag}
                        </span>
                        <h4 className="font-display text-4xl sm:text-5xl text-[#141414] mt-1 tracking-tight">
                          {project.title}
                        </h4>
                        <p className="text-sm font-medium text-[#4A4844] mt-2">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#E8E6E1]">
                        <div>
                          <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block">
                            THE CHALLENGE
                          </span>
                          <p className="text-xs text-[#4A4844] mt-1 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider block">
                            SYSTEMIC OUTCOME
                          </span>
                          <p className="text-xs text-[#141414] mt-1 leading-relaxed font-medium">
                            {project.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-[#F3F1EC] text-[11px] font-mono text-[#4A4844]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-8 border-t border-[#E8E6E1] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#7A7873]">
                        Role: {project.role}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#141414] group-hover:text-[#FD5D07] transition-colors">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Playground Highlights Preview Section */}
        <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F3F1EC] border border-[#E8E6E1]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FD5D07]">
                  [ 02 • INTERACTIVE LABORATORY ]
                </span>
                <h3 className="font-display text-4xl sm:text-5xl text-[#141414] mt-1 tracking-tight">
                  THE PLAYGROUND
                </h3>
                <p className="text-sm text-[#7A7873] mt-2 max-w-xl">
                  A sandbox for unusual interaction patterns, physics experiments, and our repurposed spatial infinite canvas engine.
                </p>
              </div>
              <button
                onClick={() => onNavigate('playground')}
                className="group flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-[#141414] hover:text-[#FD5D07] transition-colors"
              >
                <span>Explore all crafts</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredPlayground.map((craft) => (
                <div
                  key={craft.id}
                  onClick={() => onNavigate('playground')}
                  className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E6E1] hover:border-[#141414]/30 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7A7873] pb-3 border-b border-[#E8E6E1]">
                      <span>{craft.tag}</span>
                      <span className="text-[#FD5D07] font-semibold">{craft.category}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#141414] mt-3 group-hover:text-[#FD5D07] transition-colors">
                      {craft.title}
                    </h4>
                    <p className="text-xs text-[#4A4844] mt-1.5 leading-relaxed">
                      {craft.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8E6E1] flex items-center justify-between text-xs font-mono text-[#7A7873]">
                    <span>INTERACTIVE CRAFT</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
