import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import styles from "./Hero.module.css";
import LoadingScreen from "./LoadingScreen";
import NavBar from "./NavBar";
import MusicPlayer from "./MusicPlayer";
import { heroData, navItems } from "./heroContent";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export interface HeroProps {
  /** Optional background video for the right-hand panel. Omit to use the
   * animated gradient placeholder instead. */
  videoSrc?: string;
  /** Skip the intro loader (useful in Storybook/tests). */
  skipLoader?: boolean;
}

export default function Hero({ videoSrc, skipLoader = false }: HeroProps) {
  const [loaded, setLoaded] = useState(skipLoader);

  return (
    <div id="top" className={styles.root}>
      {!skipLoader && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <NavBar items={navItems} contactHref={heroData.contact.ctaHref} />
      <MusicPlayer
        title={heroData.track.title}
        artist={heroData.track.artist}
        src={heroData.track.src || undefined}
      />

      <section className={styles.hero} aria-label="Introduction">
        <motion.aside
          className={styles.profileCard}
          variants={container}
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
        >
          <motion.div className={styles.profileTop} variants={item}>
            <div className={styles.avatar} aria-hidden="true">
              {heroData.avatarInitials}
            </div>
            <div>
              <p className={styles.name}>{heroData.name}</p>
              <span className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                {heroData.availability}
              </span>
            </div>
          </motion.div>

          <motion.p className={styles.bio} variants={item}>
            {heroData.bioShort}
          </motion.p>

          <motion.dl className={styles.factList} variants={item}>
            {heroData.facts.map((fact) => (
              <div className={styles.factRow} key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className={styles.contactBlock} variants={item}>
            <span className={styles.contactLabel}>
              {heroData.contact.label}
            </span>
            <a className={styles.contactEmail} href={`mailto:${heroData.contact.email}`}>
              {heroData.contact.email}
            </a>
            <a className={styles.ctaButton} href={heroData.contact.ctaHref}>
              {heroData.contact.ctaLabel}
            </a>
          </motion.div>

          <motion.div className={styles.statsRow} variants={item}>
            {heroData.stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className={styles.quickLinks} variants={item}>
            {heroData.quickLinks.map((link) => (
              <a key={link.title} href={link.href} className={styles.quickLink}>
                {link.title}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </motion.div>
        </motion.aside>

        <div className={styles.stage}>
          {videoSrc ? (
            <video
              className={styles.stageMedia}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : (
            <div className={styles.stageMedia} aria-hidden="true">
              <div className={styles.gradientBlobA} />
              <div className={styles.gradientBlobB} />
            </div>
          )}
          <div className={styles.stageScrim} aria-hidden="true" />

          <div className={styles.locationBadge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {heroData.location.city} · {heroData.location.timezone}
          </div>

          <motion.div
            className={styles.stageContent}
            variants={container}
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
          >
            <motion.p className={styles.greeting} variants={item}>
              {heroData.greeting}
            </motion.p>
            <motion.h1 className={styles.headline} variants={item}>
              <span>{heroData.headline.line1}</span>
              <span className={styles.headlineSecondary}>
                {heroData.headline.line2}
              </span>
            </motion.h1>
            <motion.p className={styles.introText} variants={item}>
              {heroData.introText}
            </motion.p>
          </motion.div>

          <div className={styles.nowPlaying}>
            <span className={styles.nowPlayingDot} aria-hidden="true" />
            <span>
              Now playing · {heroData.nowPlaying.show} on{" "}
              {heroData.nowPlaying.platform}
            </span>
          </div>

          <motion.div
            className={styles.scrollCue}
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            aria-hidden="true"
          >
            <span className={styles.scrollCueDash} />
            scroll
          </motion.div>
        </div>
      </section>
    </div>
  );
}
