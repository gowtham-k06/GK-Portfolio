import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditorialLoaderProps {
  onComplete: () => void;
  skipLoader?: boolean;
}

export const EditorialLoader = ({ onComplete, skipLoader = false }: EditorialLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // If skipped, already viewed in session, or prefers reduced motion
    const alreadySeen = sessionStorage.getItem('gk_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (skipLoader || alreadySeen || prefersReducedMotion) {
      setProgress(100);
      setVisible(false);
      onComplete();
      return;
    }

    // Snappy 650ms intro countdown
    const duration = 650;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const linear = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - linear, 3); // cubic ease-out
      setProgress(Math.floor(eased * 100));

      if (linear < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem('gk_intro_seen', 'true');
        setTimeout(() => setVisible(false), 150);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [skipLoader, onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label={`Loading, ${progress} percent`}
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#FAF9F5] flex flex-col justify-between p-6 sm:p-12 select-none border-b border-[#E8E6E1]"
        >
          {/* Top Line Progress Bar */}
          <div className="w-full h-1 bg-[#E8E6E1] overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-[#FD5D07]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center my-auto space-y-2">
            <span className="font-display text-8xl sm:text-9xl text-[#141414] tracking-tight">
              GK
            </span>
            <span className="font-mono text-xs text-[#7A7873] uppercase tracking-[0.2em]">
              PRODUCT & INTERACTION DESIGN
            </span>
          </div>

          {/* Bottom Counter & Info */}
          <div className="flex items-end justify-between font-mono text-xs text-[#7A7873]">
            <span>BENGALURU, INDIA</span>
            <span className="font-display text-4xl sm:text-5xl text-[#141414] leading-none font-bold" aria-hidden="true">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
