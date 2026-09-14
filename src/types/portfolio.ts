export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'case-study' | 'selected';
  tag: string;
  role: string;
  team: string;
  timeline: string;
  contribution: string[];
  overview: string;
  problem: string;
  outcome: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
  externalUrl?: string;
  caseStudySections?: {
    research?: string;
    informationArchitecture?: string;
    userFlows?: string;
    designExploration?: string;
    finalExperience?: string;
    impact?: string;
    reflection?: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
  skills?: string[];
}

export interface ThoughtArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  slug: string;
  excerpt?: string;
}

export interface PlaygroundCraft {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  category: string;
  accentColor: string;
  interactive: boolean;
  description: string;
}

export interface ProfileConfig {
  name: string;
  shortName: string;
  role: string;
  location: string;
  city: string;
  country: string;
  timezone: string;
  availability: string;
  email: string;
  socials: {
    name: string;
    url: string;
    handle: string;
  }[];
  specialties: string[];
  tools: string[];
  editorialIntro: string;
  extendedBio: string[];
}
