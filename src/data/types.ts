/**
 * 路線データの共通型定義
 */
export interface StationEvent {
  date: string;
  type: 'open' | 'close' | 'rename';
  stationName: string;
  previousName?: string;
  lat: number;
  lon: number;
  order: number;
}

export interface RouteData {
  id: string;
  name: string;
  stationEvents: StationEvent[];
  minDate: string;
  maxDate: string;
}

export type StationHistoryApi = {
  getStationsAtDate: (dateStr: string) => { name: string; lat: number; lon: number; order: number }[];
  getStationOpenDate: (lat: number, lon: number) => string | null;
  getRenameEventOnDate: (lat: number, lon: number, dateStr: string) => { previousName: string; newName: string } | null;
  getStationFullHistory: (lat: number, lon: number) => { date: string; type: 'open' | 'rename' | 'close'; label: string }[];
  getEventsOnDate: (dateStr: string) => StationEvent[];
  getNearestEvents: (dateStr: string) => { last: StationEvent | null; next: StationEvent | null };
  stationEvents: StationEvent[];
  MIN_DATE: string;
  MAX_DATE: string;
};
