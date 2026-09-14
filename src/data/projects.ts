import { Project } from '../types/portfolio';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'fortune-leadx',
    title: 'Fortune LeadX',
    subtitle: 'Next-generation enterprise CRM and sales pipeline intelligence suite.',
    category: 'case-study',
    tag: 'ENTERPRISE CRM • 2025',
    role: 'Lead UI/UX Designer',
    team: 'Product Manager, 4 Engineers, Design Lead',
    timeline: '2025 — Present',
    featured: true,
    accentColor: '#FD5D07',
    tags: ['Enterprise CRM', 'SaaS Platform', 'Design System', 'Pipeline Automation'],
    contribution: [
      'End-to-end product architecture',
      'Information architecture & user journeys',
      'Data-dense table ergonomics & custom filters',
      'Figma design system & component library',
      'Design QA & engineering handoff'
    ],
    overview:
      'Fortune LeadX is an enterprise-grade sales intelligence platform developed for The Fortune Group to unify inbound lead triage, sales rep performance tracking, and deal acceleration across multi-regional divisions.',
    problem:
      'Sales teams relied on fractured legacy spreadsheets and disconnected point solutions, resulting in delayed lead outreach, lost follow-up cycles, and zero centralized visibility for pipeline leadership.',
    outcome:
      'Engineered a unified CRM workspace featuring high-speed lead qualification queues, customizable pipeline boards, contextual client dossiers, and automated outreach triggers designed for rapid keyboard-first workflows.',
    caseStudySections: {
      research:
        'Conducted stakeholder interviews and observation sessions with active sales representatives, account managers, and divisional leads to identify workflow bottlenecks, high-frequency actions, and friction points in existing tracking tools.',
      informationArchitecture:
        'Structured the workspace into three primary functional pillars: Inbound Qualification Inbox, Active Deal Pipeline, and Executive Velocity Analytics, tied together with global keyboard shortcuts and a persistent omni-search.',
      userFlows:
        'Mapped end-to-end user pathways from raw lead ingestion, through automated routing and enrichment, to one-click qualification, meeting scheduling, and deal contract handoff.',
      designExploration:
        'Explored diverse layout paradigms balancing extreme data density with cognitive clarity — iterating through multi-column split views, drawer inspectors, and modular Kanban stages.',
      finalExperience:
        'Delivered a focused, low-latency web application with customized tabular views, instant inline status updates, responsive drawer details, and a cohesive design system built around high-contrast typography.',
      impact:
        'Successfully transitioned sales divisions from fragmented spreadsheet tracking to an integrated, centralized platform, streamlining lead handoff cycles and unifying lead status transparency across teams.',
      reflection:
        'Designing for high-density enterprise users reinforced that aesthetic restraint and disciplined typography hierarchy are vital in mission-critical daily software.'
    }
  },
  {
    id: 'strata-design-system',
    title: 'Strata System',
    subtitle: 'Scalable design token architecture and multi-product component library.',
    category: 'case-study',
    tag: 'DESIGN SYSTEMS • 2024',
    role: 'UI/UX Designer',
    team: 'Cross-functional Design & Frontend Team',
    timeline: '2024',
    featured: true,
    accentColor: '#171717',
    tags: ['Design System', 'Token Architecture', 'Accessibility', 'Figma'],
    contribution: [
      'Design token hierarchy & semantic naming',
      'Figma auto-layout component library',
      'Accessibility contrast documentation (WCAG AAA)',
      'Developer documentation & token sync specs'
    ],
    overview:
      'A centralized multi-theme design system engineered to harmonize visual language, accelerate product velocity, and guarantee typographic consistency across enterprise dashboards.',
    problem:
      'Rapid parallel development across multiple teams led to inconsistent component styling, conflicting color values, and redundant engineering implementation cycles.',
    outcome:
      'Built a unified system of over 60 responsive Figma components, standardized semantic tokens for light/dark themes, and established structured guidelines for engineering handoff.',
    caseStudySections: {
      research:
        'Audited all existing UI components across live production environments to categorize redundancy, divergent patterns, and inconsistent states.',
      informationArchitecture:
        'Organized the token hierarchy into primitive, semantic, and component-specific levels, ensuring clear boundaries for theming and cross-platform flexibility.',
      userFlows:
        'Defined designer and developer contribution workflows, from initial component proposal and design review to code release and versioned documentation.',
      designExploration:
        'Tested diverse border radius scales, typographic contrast ratios, and density presets (compact vs. comfortable) across data-heavy operational layouts.',
      finalExperience:
        'A comprehensive Figma component architecture paired with interactive guidelines, enabling designers and engineers to build aligned screens with minimal friction.',
      impact:
        'Reduced design-to-development handoff friction, eliminated visual discrepancies across core user flows, and established an ongoing system governance model.',
      reflection:
        'A design system is fundamentally a communication tool. Simplicity and predictability in naming conventions dictate its actual adoption.'
    }
  },
  {
    id: 'pulse-intelligence',
    title: 'Pulse Analytics',
    subtitle: 'Real-time telemetry and operational intelligence portal.',
    category: 'selected',
    tag: 'DATA PLATFORM • 2024',
    role: 'Product Designer',
    team: 'Product Lead, 2 Engineers',
    timeline: '2024',
    featured: false,
    accentColor: '#0D99FF',
    tags: ['Data Visualization', 'Telemetry', 'Dashboard UI'],
    contribution: [
      'Information architecture',
      'Custom metric card layouts',
      'Time-series charting ergonomics'
    ],
    overview:
      'Operational monitoring dashboard providing instant visibility into multi-node server health, request throughput, and real-time error latency metrics.',
    problem:
      'Engineers were overwhelmed by unstructured raw log outputs and lacked visual signals to immediately pinpoint anomalous latency spikes.',
    outcome:
      'Designed a clean, dark-capable monitoring layout prioritizing critical alert thresholds, customizable chart widgets, and instant drill-down inspectors.'
  },
  {
    id: 'verve-commerce',
    title: 'Verve Studio',
    subtitle: 'Minimalist editorial e-commerce platform for architectural goods.',
    category: 'selected',
    tag: 'EDITORIAL COMMERCE • 2023',
    role: 'Digital Designer',
    team: 'Creative Director, Frontend Developer',
    timeline: '2023 — 2024',
    featured: false,
    accentColor: '#8C52FF',
    tags: ['E-Commerce', 'Editorial Design', 'Micro-Interactions'],
    contribution: [
      'Visual design & art direction',
      'Cart drawer interaction choreography',
      'Responsive editorial catalog layout'
    ],
    overview:
      'An editorial storefront balancing large-format imagery, restrained typography, and fluid micro-transitions for premium bespoke home goods.',
    problem:
      'Generic e-commerce grid templates diluted the brand’s artisanal positioning and high-end material tactile story.',
    outcome:
      'Created an immersive, publication-like browsing experience with staggered imagery, subtle hover reveals, and seamless drawer checkout.'
  }
];
