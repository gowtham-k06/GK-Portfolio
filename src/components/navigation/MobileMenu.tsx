import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '../../data/profile';
import { ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentRoute,
  onNavigate
}) => {
  const navItems = [
    { id: 'home', label: 'Home', number: '00' },
    { id: 'works', label: 'Works', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'thoughts', label: 'Thoughts', number: '03' },
    { id: 'playground', label: 'Playground', number: '04' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-[#FAF9F5] border-b border-[#E8E6E1] shadow-xl overflow-hidden"
        >
          <div className="px-5 py-8 max-w-xl mx-auto flex flex-col space-y-8">
            {/* Primary Nav Links */}
            <nav className="flex flex-col divide-y divide-[#E8E6E1]/60">
              {navItems.map((item) => {
                const isActive = currentRoute === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="flex items-center justify-between py-4 text-left group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#7A7873]">{item.number}</span>
                      <span
                        className={`text-2xl font-display uppercase tracking-wide transition-colors ${
                          isActive
                            ? 'text-[#FD5D07]'
                            : 'text-[#141414] group-hover:text-[#FD5D07]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FD5D07]/10 text-[#FD5D07] font-semibold">
                        CURRENT
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#7A7873] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Contact & Info Card */}
            <div className="p-4 rounded-xl bg-[#F3F1EC] border border-[#E8E6E1] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#7A7873]">LOCATION</span>
                <span className="text-[#141414] font-medium">{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#7A7873]">STATUS</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {PROFILE_DATA.availability}
                </span>
              </div>

              <div className="pt-2 border-t border-[#E8E6E1]">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="w-full py-2.5 rounded-lg bg-[#141414] text-[#FAF9F5] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#FD5D07] transition-colors"
                >
                  <span>{PROFILE_DATA.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
