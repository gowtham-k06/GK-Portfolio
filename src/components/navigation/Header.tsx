import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'thoughts', label: 'Thoughts' },
    { id: 'playground', label: 'Playground' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E6E1] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Left: Brand Identity & Location */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
              aria-label="Go to homepage"
            >
              {/* Minimal Monogram */}
              <div className="w-10 h-10 rounded-lg bg-[#141414] text-[#FAF9F5] flex items-center justify-center font-display text-2xl tracking-wider group-hover:bg-[#FD5D07] transition-colors duration-200">
                GK
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-mono font-bold tracking-wider text-[#141414] block leading-tight uppercase">
                  {PROFILE_DATA.shortName}
                </span>
                <span className="text-[11px] font-mono text-[#7A7873] block leading-tight">
                  {PROFILE_DATA.role}
                </span>
              </div>
            </button>

            {/* Vertical Hairline Divider */}
            <div className="hidden md:block w-px h-7 bg-[#E8E6E1]" />

            {/* Live Availability & Location indicator */}
            <div className="hidden md:flex items-center gap-2.5 text-[11px] font-mono text-[#7A7873]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[#141414] font-medium">{PROFILE_DATA.availability}</span>
              <span className="text-[#B5B2AA]">•</span>
              <span>{PROFILE_DATA.location}</span>
            </div>
          </div>

          {/* Right: Desktop Navigation + Contact Action */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = currentRoute === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors duration-200 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'text-[#FD5D07] font-bold'
                        : 'text-[#4A4844] hover:text-[#141414]'
                    }`}
                  >
                    {/* Roll-up text track */}
                    <span className="relative inline-flex flex-col h-[16px] overflow-hidden leading-[16px] align-middle">
                      <span className="inline-flex items-center gap-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FD5D07]" />}
                        <span>{item.label}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 absolute top-full left-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full text-[#FD5D07] font-bold" aria-hidden="true">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FD5D07]" />
                        <span>{item.label}</span>
                      </span>
                    </span>

                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FD5D07]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="w-px h-6 bg-[#E8E6E1]" />

            {/* Direct Contact CTA */}
            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry%20%E2%80%94%20Product%20Design`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#FD5D07] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xs"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: Availability dot + Menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3F1EC] border border-[#E8E6E1] text-[10px] font-mono text-[#141414]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Bengaluru</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E6E1] text-xs font-mono uppercase text-[#141414] hover:bg-[#F3F1EC] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-[#FD5D07]" />
                  <span className="font-bold text-[#FD5D07]">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4" />
                  <span className="font-bold">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentRoute={currentRoute}
        onNavigate={handleNavClick}
      />
    </>
  );
};
