export interface Broker {
  id: number;
  name: string;
  points: number;
  avatar: string;
  badges: string[];
}

export interface HeatmapData {
  day: string;
  hour: string;
  value: number;
}

export interface FunnelData {
  name: string;
  value: number;
}