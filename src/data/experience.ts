import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'The Fortune Group',
    role: 'UI/UX Designer',
    period: '2025 — Present',
    location: 'Bengaluru, India',
    current: true,
    description:
      'Leading end-to-end product design for Fortune LeadX, the group’s enterprise lead intelligence and sales execution platform. Architected scalable design tokens, high-density dashboard layouts, and complex pipeline workflows.',
    skills: ['SaaS', 'CRM Architecture', 'Design Systems', 'Figma', 'Workflow Automation']
  },
  {
    company: 'Pixelmax Softech',
    role: 'UI/UX Designer',
    period: '2024 — 2025',
    location: 'Bengaluru, India',
    current: false,
    description:
      'Spearheaded user research and interface systems for B2B SaaS web applications. Built modular component libraries and conducted rigorous usability audits across high-volume administrative portals.',
    skills: ['B2B Web Apps', 'User Research', 'Design Systems', 'Rapid Prototyping']
  },
  {
    company: 'Koios Engineering Solutions',
    role: 'UI Designer',
    period: '2024',
    location: 'India',
    current: false,
    description:
      'Crafted operational user interfaces and data-dense monitoring screens for industrial engineering software. Standardized visual hierarchy, typography scales, and data table ergonomics.',
    skills: ['Data Visualization', 'Engineering UI', 'Information Density', 'Design Specs']
  },
  {
    company: 'Fistcom IT Solution India Pvt Ltd',
    role: 'Graphic Designer',
    period: '2023 — 2024',
    location: 'India',
    current: false,
    description:
      'Formed the visual foundation in brand design, vector systems, editorial layout compositions, and marketing digital assets before transitioning fully into digital product UI/UX.',
    skills: ['Editorial Layouts', 'Brand Identity', 'Vector Systems', 'Visual Craft']
  }
];

export const EXPERTISE_AREAS = [
  {
    title: 'Product & Systems Design',
    description:
      'Translating ambiguous multi-stakeholder business logic into cohesive, accessible product architectures with systemic reusability.'
  },
  {
    title: 'Enterprise CRM & Workflows',
    description:
      'Designing high-density data tables, multi-stage pipelines, lead management mechanics, and low-friction operational flows.'
  },
  {
    title: 'Interaction & Micro-Motion',
    description:
      'Intentional transitions, tactile feedback, affordances, and state continuity that clarify user focus rather than distract.'
  },
  {
    title: 'Design-to-Code Alignment',
    description:
      'Tight coordination with engineering teams through token parity, component specs, responsive edge cases, and design QA.'
  }
];

export const DESIGN_PHILOSOPHY = [
  {
    number: '01',
    principle: 'Restraint Over Spectacle',
    detail:
      'Enterprise software should not scream for attention. Great tool design gives users superpowers by removing cognitive friction and visual noise.'
  },
  {
    number: '02',
    principle: 'Information Density with Breathing Room',
    detail:
      'Dense data does not require clutter. With disciplined typography hierarchy, intentional spacing, and structured borders, complex systems become effortlessly readable.'
  },
  {
    number: '03',
    principle: 'Every Interaction Has Intent',
    detail:
      'Micro-animations and transitions should communicate continuity, hierarchy, or spatial affordance — never existing purely for ornamental flash.'
  }
];
