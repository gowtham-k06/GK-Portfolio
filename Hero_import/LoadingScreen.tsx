import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LoadingScreen.module.css";

interface LoadingScreenProps {
  /** Called once the counter reaches 100% and the exit animation should start. */
  onComplete: () => void;
}

/**
 * Full-screen intro loader: counts 0 → 100 with an eased ramp, then curtains
 * away to reveal the page. Respects prefers-reduced-motion by skipping the
 * animated count-up and resolving almost immediately.
 */
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setProgress(100);
      const t = setTimeout(() => setVisible(false), 150);
      return () => clearTimeout(t);
    }

    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const linear = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - linear, 3); // ease-out cubic
      setProgress(Math.floor(eased * 100));

      if (linear < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 350);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className={styles.overlay}
          role="status"
          aria-live="polite"
          aria-label={`Loading, ${progress} percent`}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }}
        >
          <div className={styles.topRule} aria-hidden="true">
            <motion.div
              className={styles.topRuleFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className={styles.brand}>Jordan Blake</span>
          <span className={styles.counter} aria-hidden="true">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
