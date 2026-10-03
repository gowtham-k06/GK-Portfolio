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
    id: 'strato-crm',
    title: 'Strato CRM',
    subtitle: 'Unified client relationship and omnichannel pipeline intelligence suite.',
    category: 'case-study',
    tag: 'ENTERPRISE CRM • 2024',
    role: 'UI/UX Designer',
    team: 'Product Lead, 3 Full-stack Engineers',
    timeline: '2024 — 2025',
    featured: true,
    accentColor: '#2563EB',
    tags: ['CRM Architecture', 'Data Tables', 'Filter Systems', 'Enterprise UX'],
    contribution: [
      'Multi-column CRM dashboard design',
      'Custom filter logic & saved view presets',
      'Interactive customer timeline dossiers',
      'Design token system & dark mode hierarchy'
    ],
    overview:
      'Strato CRM unifies complex B2B client journeys into a focused single-pane workspace, synchronizing active deal pipelines, communication streams, and account health scoring.',
    problem:
      'Account executives had to constantly juggle separate communication tools and rigid databases, leading to stale deal updates and poor customer context continuity.',
    outcome:
      'Designed an adaptive CRM interface with keyboard-driven filtering, real-time activity streams, and customizable deal velocity boards that cut administrative overhead by 35%.',
    caseStudySections: {
      research:
        'Analyzed 40+ sales workflows across high-velocity B2B teams to identify the most frequent context-switching friction points.',
      informationArchitecture:
        'Architected a 3-tier view model: Global Pipeline, Account Dossier, and Contextual Action Inspector with unified keyboard navigation.',
      userFlows:
        'Streamlined deal stage progression, communication logging, and follow-up task assignment into single-interaction flows.',
      designExploration:
        'Prototyped multiple data-table density presets, evaluating scanability and visual fatigue across 8-hour workday usage.',
      finalExperience:
        'A refined, high-density desktop CRM application featuring instant inline edits, smart activity feeds, and fluid sidebar navigation.',
      impact:
        'Accelerated deal update logging velocity and unified multi-team account ownership records across enterprise clients.',
      reflection:
        'Clarity in complex enterprise data comes from predictable patterns and high visual hierarchy, not visual ornamentation.'
    }
  },
  {
    id: 'strato-hrm',
    title: 'Strato HRM',
    subtitle: 'Modern workforce management, presence telemetry, and organizational intelligence.',
    category: 'case-study',
    tag: 'HR & WORKFORCE • 2024',
    role: 'Product Designer',
    team: 'HR Operations, 2 Frontend Engineers',
    timeline: '2024',
    featured: true,
    accentColor: '#10B981',
    tags: ['Workforce Management', 'Attendance Telemetry', 'HR Analytics', 'Design Systems'],
    contribution: [
      'Employee directory & presence indicators',
      'Leave approval & shift scheduling workflows',
      'Interactive workforce telemetry dashboards',
      'Responsive design and mobile-friendly portals'
    ],
    overview:
      'Strato HRM reimagines enterprise employee management, bringing transparency to attendance telemetry, shift rotations, and organizational hierarchy.',
    problem:
      'Legacy payroll and attendance portals were cumbersome and confusing, requiring endless form submissions and generating frequent manual reconciliation tickets.',
    outcome:
      'Delivered a clean, human-centered HR workspace with live attendance telemetry, one-click leave approvals, and visual departmental headcount distribution.',
    caseStudySections: {
      research:
        'Surveyed over 150 employees and administrative staff to pinpoint common pain points in daily attendance marking and leave management.',
      informationArchitecture:
        'Separated employee self-service tools from manager approval queues and executive headcount analytics for zero-distraction workflows.',
      userFlows:
        'Designed single-tap mobile check-in flows, intuitive calendar drag-and-drop shift swaps, and frictionless request approvals.',
      designExploration:
        'Explored subtle status color coding and card layouts to balance administrative rigor with an approachable, calm aesthetic.',
      finalExperience:
        'An accessible web portal featuring interactive team availability rosters, live attendance counters, and clear approval queues.',
      impact:
        'Reduced routine HR administrative inquiries by 40% and improved shift management turnaround across departments.',
      reflection:
        'Enterprise tools that directly touch every employee must feel respectful, frictionless, and reassuring in their simplicity.'
    }
  },
  {
    id: 'fortune-one-crm',
    title: 'Fortune One CRM',
    subtitle: 'High-value real estate portfolio CRM and buyer inquiry matching engine.',
    category: 'case-study',
    tag: 'REAL ESTATE CRM • 2025',
    role: 'Lead UI/UX Designer',
    team: 'Real Estate VP, 3 Engineers, Product Lead',
    timeline: '2025',
    featured: true,
    accentColor: '#D97706',
    tags: ['Real Estate Tech', 'Asset Management', 'Lead Matching', 'Enterprise CRM'],
    contribution: [
      'Property asset catalog architecture',
      'Buyer preference & inquiry matching algorithm UI',
      'Interactive unit floorplan and availability matrices',
      'Site tour booking & milestone deal progress'
    ],
    overview:
      'Fortune One CRM is a specialized luxury real estate customer intelligence platform tailored for property developers and wealth advisory brokerages.',
    problem:
      'High-value property transactions involve intricate buyer criteria and shifting unit availability that standard CRM tools fail to model effectively.',
    outcome:
      'Engineered an asset-first CRM platform combining interactive building availability grids, automated buyer-to-inventory matching, and private viewing schedules.',
    caseStudySections: {
      research:
        'Interviewed senior property consultants to map buyer evaluation criteria from initial brochure delivery to final escrow deposit.',
      informationArchitecture:
        'Organized the system around two reciprocal axes: the Inventory Stack (developments, towers, units) and the Investor Portfolio.',
      userFlows:
        'Designed rapid inventory filtering, instant unit hold requests, and client dossier generation for private showroom presentations.',
      designExploration:
        'Balanced architectural aesthetic elegance with high-density availability tables and pricing calculators.',
      finalExperience:
        'A sophisticated dark/warm editorial interface with high-resolution unit matrices, client match scoring, and deal tracking.',
      impact:
        'Significantly shortened unit reservation turnaround times and increased cross-selling across premium real estate projects.',
      reflection:
        'In luxury domains, the digital tool must reflect the craftsmanship and quality of the physical assets being represented.'
    }
  },
  {
    id: 'nikkou-logistics',
    title: 'Nikkou Logistics',
    subtitle: 'Cross-border freight telemetry and multi-modal shipment command center.',
    category: 'selected',
    tag: 'LOGISTICS & MAPS • 2024',
    role: 'Product Designer',
    team: 'Logistics Operations Lead, 2 Engineers',
    timeline: '2024',
    featured: true,
    accentColor: '#0284C7',
    tags: ['Logistics Telemetry', 'Route Mapping', 'Fleet Operations', 'Data Visualization'],
    contribution: [
      'Interactive geospatial route telemetry UI',
      'Live shipment milestone timeline choreography',
      'Container sensor alerts (cold-chain & shock)',
      'Dark-mode optimized dispatch dashboard'
    ],
    overview:
      'Nikkou Logistics provides freight forwarders with continuous real-time visibility into multi-modal air, sea, and land cargo consignments worldwide.',
    problem:
      'Dispatchers were forced to manually poll multiple shipping carrier portals to deduce package location and customs clearance status.',
    outcome:
      'Created an integrated telemetry map dashboard showing live flight and maritime trajectories, automated waypoint alarms, and proactive ETA recalculations.'
  },
  {
    id: 'sethu',
    title: 'Sethu',
    subtitle: 'Collaborative academic platform connecting students, mentors, and cohorts.',
    category: 'selected',
    tag: 'EDTECH & COMMUNITY • 2023',
    role: 'UI/UX Designer',
    team: 'Academic Director, Full-stack Developer',
    timeline: '2023 — 2024',
    featured: true,
    accentColor: '#8B5CF6',
    tags: ['EdTech', 'Social Learning', 'Mobile UI', 'Interaction Design'],
    contribution: [
      'Course module progression interface',
      'Peer-to-peer critique thread UI',
      'Mentor feedback & grading canvas',
      'Design system for responsive mobile web'
    ],
    overview:
      'Sethu is an engaging social learning environment engineered to encourage meaningful peer dialogue, collaborative critique, and structured academic growth.',
    problem:
      'Existing course management software suffered from dry, bureaucratic interfaces that suppressed student participation and peer collaboration.',
    outcome:
      'Designed a tactile, inviting digital studio experience with interactive assignment milestones, live critique cards, and synchronous mentor feedback.'
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
    featured: false,
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
      'Built a unified system of over 60 responsive Figma components, standardized semantic tokens for light/dark themes, and established structured guidelines for engineering handoff.'
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
