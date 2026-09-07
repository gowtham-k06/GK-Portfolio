import { WorldZone, ConnectorLink, EnvironmentalItem } from '../types/world';

export const WORLD_BOUNDS = {
  minX: -2600,
  maxX: 2600,
  minY: -1800,
  maxY: 2000,
  width: 5200,
  height: 3800
};

export const WORLD_ZONES: WorldZone[] = [
  {
    id: 'studio',
    index: 1,
    title: 'CENTRAL STUDIO',
    subtitle: 'Workspace & Visual Sandbox',
    tag: 'ORIGIN • [0, 0]',
    x: 0,
    y: 0,
    width: 840,
    height: 540,
    rotation: 0,
    targetZoom: 1.0,
    accentColor: '#0D99FF',
    category: 'core'
  },
  {
    id: 'about',
    index: 2,
    title: 'ABOUT ME',
    subtitle: 'Notebook of Philosophy & Background',
    tag: 'ETHOS • FRAME 02',
    x: -1100,
    y: -720,
    width: 720,
    height: 520,
    rotation: -2.2,
    targetZoom: 1.1,
    accentColor: '#FF7262',
    category: 'narrative'
  },
  {
    id: 'experience',
    index: 3,
    title: 'EXPERIENCE',
    subtitle: 'Winding Path & Milestones',
    tag: 'CAREER • 2021-2026',
    x: -1200,
    y: 750,
    width: 820,
    height: 560,
    rotation: 1.6,
    targetZoom: 1.05,
    accentColor: '#7B61FF',
    category: 'narrative'
  },
  {
    id: 'skills',
    index: 4,
    title: 'SKILLS & CRAFT',
    subtitle: 'Design System & Vector Mechanics',
    tag: 'CAPABILITIES • SPEC',
    x: 1120,
    y: -740,
    width: 760,
    height: 540,
    rotation: 2.0,
    targetZoom: 1.1,
    accentColor: '#00C48C',
    category: 'work'
  },
  {
    id: 'projects',
    index: 5,
    title: 'CASE STUDIES',
    subtitle: 'Interactive Prototype Artboards',
    tag: 'SELECTED WORKS • 4 FRAMES',
    x: 1320,
    y: 780,
    width: 940,
    height: 600,
    rotation: -1.4,
    targetZoom: 0.95,
    accentColor: '#FF8A00',
    category: 'work'
  },
  {
    id: 'resume',
    index: 6,
    title: 'RESUME & SPECS',
    subtitle: 'Editorial Print & Formal Record',
    tag: 'CURRICULUM VITAE • PDF',
    x: 0,
    y: 1180,
    width: 680,
    height: 720,
    rotation: -0.8,
    targetZoom: 1.1,
    accentColor: '#1E1E1E',
    category: 'core'
  },
  {
    id: 'socials',
    index: 7,
    title: 'SOCIAL NETWORK',
    subtitle: 'Signals, Publications & Repos',
    tag: 'OUTBOUND • LINK DISPATCH',
    x: 1850,
    y: -30,
    width: 580,
    height: 480,
    rotation: 2.4,
    targetZoom: 1.15,
    accentColor: '#EA4C89',
    category: 'connect'
  },
  {
    id: 'contact',
    index: 8,
    title: 'COMMUNICATION BOARD',
    subtitle: 'Direct Frequency & Inquiries',
    tag: 'CONTACT • OPEN FREQUENCY',
    x: -1800,
    y: -30,
    width: 620,
    height: 520,
    rotation: -1.8,
    targetZoom: 1.15,
    accentColor: '#FFC700',
    category: 'connect'
  }
];

export const CONNECTOR_LINKS: ConnectorLink[] = [
  { id: 'c-studio-about', from: 'studio', to: 'about', label: 'ethos & origins', style: 'dashed', curvature: 0.3 },
  { id: 'c-studio-skills', from: 'studio', to: 'skills', label: 'vector & logic', style: 'solid', curvature: -0.25 },
  { id: 'c-studio-projects', from: 'studio', to: 'projects', label: 'applied design', style: 'solid', curvature: 0.35 },
  { id: 'c-studio-resume', from: 'studio', to: 'resume', label: 'credentials', style: 'dashed', curvature: 0.1 },
  { id: 'c-studio-experience', from: 'studio', to: 'experience', label: 'chronology', style: 'solid', curvature: -0.2 },
  { id: 'c-studio-contact', from: 'studio', to: 'contact', label: 'frequency', style: 'dotted', curvature: 0.2 },
  { id: 'c-studio-socials', from: 'studio', to: 'socials', label: 'network radar', style: 'dotted', curvature: -0.15 },
  { id: 'c-about-experience', from: 'about', to: 'experience', label: 'trajectory', style: 'dashed', curvature: 0.4 },
  { id: 'c-skills-projects', from: 'skills', to: 'projects', label: 'implementation', style: 'solid', curvature: -0.3 },
  { id: 'c-projects-resume', from: 'projects', to: 'resume', label: 'outcomes', style: 'dashed', curvature: 0.25 }
];

export const ENVIRONMENTAL_ITEMS: EnvironmentalItem[] = [
  {
    id: 'cursor-1',
    type: 'cursor',
    x: -180,
    y: -120,
    label: 'Karthik (Viewing Frame 01)',
    data: { color: '#0D99FF' }
  },
  {
    id: 'cursor-2',
    type: 'cursor',
    x: 680,
    y: -320,
    label: 'Elena • Product Design',
    data: { color: '#7B61FF' }
  },
  {
    id: 'cursor-3',
    type: 'cursor',
    x: 750,
    y: 420,
    label: 'Marcus • Design Technologist',
    data: { color: '#FF7262' }
  },
  {
    id: 'redline-1',
    type: 'redline',
    x: 0,
    y: -360,
    label: 'W: 840px  H: 540px',
    data: { orientation: 'horizontal', length: 300 }
  },
  {
    id: 'redline-2',
    type: 'redline',
    x: -550,
    y: -380,
    label: 'gap: 280px',
    data: { orientation: 'diagonal', length: 180 }
  },
  {
    id: 'swatch-palette',
    type: 'swatch',
    x: 480,
    y: -80,
    rotation: 4,
    data: {
      colors: ['#0D99FF', '#7B61FF', '#FF7262', '#00C48C', '#FFC700', '#1E1E1E']
    }
  },
  {
    id: 'ruler-accent',
    type: 'ruler',
    x: -420,
    y: 220,
    rotation: -15,
    label: 'GRID 8pt'
  }
];
