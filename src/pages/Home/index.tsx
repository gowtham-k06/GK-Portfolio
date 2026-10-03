import React from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { PLAYGROUND_DATA } from '../../data/playground';
import { IdentityRail } from '../../components/home/IdentityRail';
import { SpatialHero } from '../../components/home/SpatialHero';
import { FeaturedProjects } from '../../components/home/FeaturedProjects';
import { ArrowUpRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (route: string, projectId?: string) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredPlayground = PLAYGROUND_DATA.slice(0, 3);

  return (
    <PageTransition className="w-full">
      {/* HOME HERO COMPOSITION: Editorial Page Grid */}
      <section className="w-full border-b border-[#E8E6E1] bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto 2xl:pl-[90px] xl:pl-[50px] lg:pl-[30px] flex flex-col lg:flex-row items-stretch">
          {/* 1. LEFT IDENTITY PANEL: 365px on desktop, right divider at x=455 */}
          <IdentityRail onNavigate={onNavigate} />

          {/* 2 & 3. MAIN CONTENT: CENTRAL SMALL CARD CLUSTER + GIANT TYPOGRAPHIC HERO */}
          <SpatialHero onNavigate={onNavigate} />
        </div>
      </section>

      {/* SUBSEQUENT SECTIONS (Inside standard page container) */}
      <div className="container mx-auto sm:border-x border-[#E8E6E1] bg-[#FAF9F5]">
        {/* Featured Projects Interactive Editorial Gallery */}
        <FeaturedProjects onNavigate={onNavigate} />

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
