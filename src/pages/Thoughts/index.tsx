import React, { useState } from 'react';
import { PageTransition } from '../../components/motion/PageTransition';
import { THOUGHTS_DATA } from '../../data/thoughts';
import { ThoughtArticle } from '../../types/portfolio';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

interface ThoughtsPageProps {
  onNavigate?: (route: string) => void;
}

export const ThoughtsPage: React.FC<ThoughtsPageProps> = () => {
  const [selectedArticle, setSelectedArticle] = useState<ThoughtArticle | null>(null);

  if (selectedArticle) {
    return (
      <PageTransition className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-10">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7A7873] hover:text-[#141414] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>

        <article className="space-y-8 border-b border-[#E8E6E1] pb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FD5D07]">
              <span className="font-bold uppercase tracking-wider">{selectedArticle.category}</span>
              <span className="text-[#B5B2AA]">•</span>
              <span className="text-[#7A7873]">{selectedArticle.date}</span>
              <span className="text-[#B5B2AA]">•</span>
              <span className="text-[#7A7873]">{selectedArticle.readTime}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-[#141414] tracking-tight leading-[1.05]">
              {selectedArticle.title}
            </h1>

            <p className="text-lg text-[#4A4844] font-medium leading-relaxed">
              {selectedArticle.summary}
            </p>
          </div>

          <div className="prose prose-neutral max-w-none text-base text-[#4A4844] leading-relaxed space-y-6 pt-6 border-t border-[#E8E6E1]">
            <p>{selectedArticle.excerpt}</p>
            <p>
              In enterprise systems, clarity is an ethical responsibility. When someone uses an interface to manage critical customer interactions, process high-stakes transactions, or coordinate logistics across timezones, an ambiguous button or a poorly placed confirmation modal is not just bad UX — it creates operational stress.
            </p>
            <blockquote className="p-4 rounded-xl bg-[#F3F1EC] border-l-4 border-[#FD5D07] text-sm font-mono text-[#141414]">
              "The most impactful digital experiences often feel so natural and predictable that their design becomes virtually invisible."
            </blockquote>
            <p>
              By embracing editorial typography hierarchies, generous whitespace, and controlled accents, we design tools that respect the user’s intelligence and attention span.
            </p>
          </div>
        </article>

        <div className="pt-4 flex justify-between items-center">
          <span className="text-xs font-mono text-[#7A7873]">Published by GK</span>
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-xs font-mono font-bold text-[#FD5D07] hover:underline"
          >
            ← Return to Index
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 space-y-14 sm:space-y-20">
      {/* Header */}
      <section className="border-b border-[#E8E6E1] pb-10 sm:pb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FD5D07] block">
              [ 03 • WRITING & ESSAYS ]
            </span>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#141414] tracking-tight mt-1">
              THOUGHTS
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
              Dispatches on software density, interaction affordances, design systems, and the intersection of product craft and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Article Index List */}
      <section className="divide-y divide-[#E8E6E1] border-b border-[#E8E6E1]">
        {THOUGHTS_DATA.map((article) => (
          <article
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="py-8 sm:py-10 group cursor-pointer hover:bg-[#F3F1EC]/40 px-3 sm:px-6 rounded-2xl transition-all duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              {/* Metadata */}
              <div className="md:col-span-3 space-y-1">
                <span className="text-[11px] font-mono text-[#FD5D07] font-semibold uppercase block">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A7873]">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title & Summary */}
              <div className="md:col-span-8 space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl text-[#141414] group-hover:text-[#FD5D07] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-[#4A4844] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-end">
                <ArrowUpRight className="w-5 h-5 text-[#7A7873] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageTransition>
  );
};
