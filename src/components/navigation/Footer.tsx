import React from 'react';
import { PROFILE_DATA } from '../../data/profile';

interface FooterProps {
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white pt-3">
      {/* Main Footer Container */}
      <section className="mx-[10px] overflow-hidden rounded-[38px] bg-[#0B0B0B] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-20 lg:px-0 lg:py-[72px]">

          {/* Availability Label */}
          <div className="mb-12 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:mb-14">
            <span className="h-2 w-2 rounded-full bg-[#FD5D07]" />
            <span>Open for work</span>
          </div>

          {/* Main Message */}
          <div className="max-w-[760px]">
            <p className="text-[28px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[42px]">
              I'm currently available for full-time roles as well as
              freelance or contract work. If you'd like to collaborate or
              find time to chat, feel free to reach out by email.
            </p>
          </div>

          {/* Let's Talk */}
          <div className="mt-10 flex items-center justify-between border-b border-white/15 pb-10 sm:mt-12 sm:pb-12">
            <button
              type="button"
              onClick={() => {
                const email = PROFILE_DATA.email;
                window.location.href = `mailto:${email}?subject=Project%20Inquiry`;
              }}
              className="group flex items-center gap-4 text-left"
            >
              <span className="font-display text-[76px] font-bold uppercase leading-[0.82] tracking-[-0.06em] text-[#FD5D07] transition-transform duration-300 group-hover:translate-x-1 sm:text-[120px] lg:text-[150px]">
                Let's Talk.
              </span>

              <span className="hidden text-[34px] text-[#FD5D07] transition-transform duration-300 group-hover:translate-x-2 sm:block lg:text-[42px]">
                ↓
              </span>
            </button>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* Email */}
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="group border-b border-white/15 py-7 sm:border-b-0 sm:border-r sm:pr-12"
            >
              <div className="mb-7 text-[18px] text-white">
                [ @ ]
              </div>

              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
                Send a message
              </span>

              <span className="block text-[18px] tracking-[-0.02em] text-white transition-colors group-hover:text-[#FD5D07]">
                {PROFILE_DATA.email}
              </span>
            </a>

            {/* Discovery Call */}
            <button
              type="button"
              onClick={() => {
                // Replace with your booking link later
                console.log('Discovery call link');
              }}
              className="group py-7 text-left sm:pl-12"
            >
              <div className="mb-7 text-[18px] text-white">
                [ □ ]
              </div>

              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
                Book a discovery call
              </span>

              <span className="flex items-center justify-between text-[18px] tracking-[-0.02em] text-white">
                <span>30 mins call</span>
                <span className="text-white/60 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </button>
          </div>

          {/* Social / Utility Row */}
          <div className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-7 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">

            {/* Social Links */}
            <div>
              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
                Find me online
              </span>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Behance', href: 'https://www.behance.net/gowthamk17' },
                  { label: 'Instagram', href: '#' },
                  { label: 'X', href: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noreferrer' : undefined}
                    className="border border-white/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white/70 transition-all duration-200 hover:border-[#FD5D07] hover:text-[#FD5D07]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Back To Top */}
            <button
              type="button"
              onClick={handleBackToTop}
              className="group flex items-center gap-3 self-start font-mono text-[9px] uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white sm:self-auto"
            >
              <span>Back to top</span>

              <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-[14px] transition-all duration-200 group-hover:border-[#FD5D07] group-hover:text-[#FD5D07]">
                ↑
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Credits */}
      <div className="flex min-h-[72px] flex-col items-center justify-center gap-2 px-6 py-6 text-center sm:flex-row sm:gap-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#77746F]">
          Made with
        </span>

        <span className="text-[#FD5D07]">
          ♥
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#77746F]">
          in Figma, built with React & TypeScript, crafted in Antigravity
        </span>

        <span className="hidden text-[#B8B5AF] sm:inline">•</span>

        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#77746F]">
          © {new Date().getFullYear()} Gowtham K
        </span>
      </div>
    </footer>
  );
};