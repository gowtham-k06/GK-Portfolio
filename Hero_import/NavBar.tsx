import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavBar.module.css";
import type { NavItem } from "./heroContent";

interface NavBarProps {
  items: NavItem[];
  contactHref: string;
}

/** A single nav link with a two-layer "roll up" hover reveal. */
function RollLink({ label, href }: NavItem) {
  return (
    <a className={styles.navLink} href={href}>
      <span className={styles.navLinkTrack}>
        <span className={styles.navLinkText}>{label}</span>
        <span className={styles.navLinkText} aria-hidden="true">
          {label}
        </span>
      </span>
    </a>
  );
}

export default function NavBar({ items, contactHref }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a className={styles.logo} href="#top" aria-label="Home">
          /
        </a>

        <ul className={styles.linkList}>
          {items.map((item) => (
            <li key={item.href}>
              <RollLink {...item} />
            </li>
          ))}
        </ul>

        <div className={styles.rightGroup}>
          <a className={styles.contactPill} href={contactHref}>
            Get in touch
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={styles.menuLabel}>
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span
              className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contactHref} onClick={() => setMenuOpen(false)}>
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
