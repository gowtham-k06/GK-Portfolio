import { PlaygroundCraft } from '../types/portfolio';

export const PLAYGROUND_DATA: PlaygroundCraft[] = [
  {
    id: 'spatial-canvas',
    title: 'Spatial Infinite Canvas',
    subtitle: 'Figma-style vector coordinate exploration space with pan, zoom, and spatial frames.',
    tag: 'SPATIAL OS • EXPERIMENT 01',
    category: 'Spatial UI',
    accentColor: '#0D99FF',
    interactive: true,
    description:
      'The original experimental infinite-canvas architecture repurposed as an interactive playground sandbox. Features 2D coordinate transformation, inertia panning, mouse parallax, and artboard flight paths.'
  },
  {
    id: 'cursor-experiment',
    title: 'Tactile Magnetic Cursor',
    subtitle: 'Context-aware cursor physics that snaps, stretches, and adapts to interactive targets.',
    tag: 'PHYSICS • EXPERIMENT 02',
    category: 'Input Design',
    accentColor: '#FD5D07',
    interactive: true,
    description:
      'A study in cursor acceleration and magnetic snap states, exploring how a pointer can communicate physical weight and affordance when hovering over buttons, cards, and text glyphs.'
  },
  {
    id: 'interactive-dashboard',
    title: 'High-Density Mini Terminal',
    subtitle: 'Micro telemetry panel with keyboard navigation, live counters, and filter matrices.',
    tag: 'DENSITY • EXPERIMENT 03',
    category: 'Data Ergonomics',
    accentColor: '#10B981',
    interactive: true,
    description:
      'An experiment in compressing maximum operational information into minimal screen real estate without causing visual exhaustion or loss of scannability.'
  },
  {
    id: 'drag-interaction',
    title: 'Spring Drag & Reorder Canvas',
    subtitle: 'Fluid dragging choreography with multi-axis collision detection and tactile release.',
    tag: 'MOTION • EXPERIMENT 04',
    category: 'Direct Manipulation',
    accentColor: '#7B61FF',
    interactive: true,
    description:
      'Direct manipulation interface exploring spring damping physics, elevation shadows on grab, and snappy auto-alignment along an 8pt architectural grid.'
  },
  {
    id: 'micro-interaction',
    title: 'Haptic Switch & Toggle States',
    subtitle: 'Sensory feedback exploration for mission-critical toggle switches and controls.',
    tag: 'CONTROLS • EXPERIMENT 05',
    category: 'Micro-Interactions',
    accentColor: '#F59E0B',
    interactive: true,
    description:
      'Refined states for toggle controls that communicate binary states with definitive mechanical snap, visual confirmation cues, and state transition continuity.'
  }
];
