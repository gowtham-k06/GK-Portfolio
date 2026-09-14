// heroContent.ts
// All copy/data for the Hero section lives here, separate from presentation.
// Swap these values for real content — nothing in Hero.tsx needs to change.

export interface HeroFact {
  label: string;
  value: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface QuickLink {
  title: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Playground", href: "#playground" },
];

export const heroData = {
  avatarInitials: "JB",
  name: "Jordan Blake",
  availability: "Available for work",

  bioShort:
    "I design and build, from early concept through production-ready UI. Seven years designing, building, and leading design teams across two continents, shipping products that perform. Based in Toronto, working globally.",

  facts: [
    { label: "Location", value: "Toronto, Canada" },
    { label: "Timezone", value: "EST −5" },
    { label: "Experience", value: "7+ years" },
    { label: "Leadership", value: "Teams up to 12 designers" },
    { label: "Focus", value: "Fintech, HealthTech, SaaS, AI" },
    { label: "Stack", value: "Figma, React, TypeScript, Next.js" },
  ] satisfies HeroFact[],

  contact: {
    label: "Let's talk",
    email: "hey@jordanblake.dev",
    ctaLabel: "Book a discovery call",
    ctaHref: "#contact",
  },

  stats: [
    { value: "5", label: "Case studies" },
    { value: "8", label: "Showcase" },
  ] satisfies HeroStat[],

  quickLinks: [
    { title: "AI design system", href: "#design-system" },
    { title: "Get to know me", href: "#about" },
  ] satisfies QuickLink[],

  location: {
    city: "Toronto, Canada",
    timezone: "EST −5",
  },

  nowPlaying: {
    show: "Design Better Podcast",
    platform: "Spotify",
  },

  track: {
    title: "Ambient Focus",
    artist: "Late Night Loops",
    // Leave blank to keep the player silent/decorative in a demo.
    src: "",
  },

  greeting: "Heyyy! I'm Jordan",
  headline: {
    line1: "product designer",
    line2: "/ frontend engineer",
  },
  introText:
    "I design and build user-driven products, from early concept through production-ready UI. Over 7 years, I've designed, built, and led design teams up to 12 people across two continents, shipping products that perform — from scalable design systems to measurable business outcomes. Based in Toronto, working globally.",
};
