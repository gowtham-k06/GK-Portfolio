export type ZoneId = 
  | 'studio' 
  | 'about' 
  | 'experience' 
  | 'skills' 
  | 'projects' 
  | 'resume' 
  | 'socials' 
  | 'contact';

export interface WorldZone {
  id: ZoneId;
  index: number;
  title: string;
  subtitle: string;
  tag: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // degrees
  targetZoom: number;
  accentColor: string;
  category: 'core' | 'narrative' | 'work' | 'connect';
}

export interface ConnectorLink {
  id: string;
  from: ZoneId;
  to: ZoneId;
  label?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  curvature?: number; // 0 = straight, 0.5 = moderate curve
}

export interface CameraState {
  x: number;
  y: number;
  zoom: number;
}

export interface EnvironmentalItem {
  id: string;
  type: 'tape' | 'cursor' | 'swatch' | 'redline' | 'ruler' | 'sticker' | 'stamp';
  x: number;
  y: number;
  rotation?: number;
  label?: string;
  data?: any;
}
