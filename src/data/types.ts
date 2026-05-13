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

/** 路線の旅客案内上の名称・愛称の変更（駅ではない） */
export interface LineNameEvent {
  date: string;
  /** 変更前の案内名・通称など（短い説明可） */
  previousLineName: string;
  /** 変更後の案内名・通称など */
  newLineName: string;
}

/** タイムライン上の「この日の出来事」表示用（駅イベント＋路線名イベント） */
export type TimelineEvent =
  | { kind: 'station'; event: StationEvent }
  | { kind: 'lineName'; date: string; previousLineName: string; newLineName: string };

export interface RouteData {
  id: string;
  name: string;
  stationEvents: StationEvent[];
  /** 路線名・愛称の変遷（任意。空なら駅履歴のみ） */
  lineNameEvents: LineNameEvent[];
  minDate: string;
  maxDate: string;
}

export type StationHistoryApi = {
  getStationsAtDate: (dateStr: string) => { name: string; lat: number; lon: number; order: number }[];
  getStationOpenDate: (lat: number, lon: number) => string | null;
  getRenameEventOnDate: (lat: number, lon: number, dateStr: string) => { previousName: string; newName: string } | null;
  getStationFullHistory: (lat: number, lon: number) => { date: string; type: 'open' | 'rename' | 'close'; label: string }[];
  /** 駅のみ（地図・駅ポップアップ用。路線名は含まない） */
  getStationEventsOnDate: (dateStr: string) => StationEvent[];
  /** 駅＋路線名。タイムラインの「この日に起きたこと」用 */
  getTimelineEventsOnDate: (dateStr: string) => TimelineEvent[];
  getNearestTimelineEvents: (dateStr: string) => { last: TimelineEvent | null; next: TimelineEvent | null };
  stationEvents: StationEvent[];
  lineNameEvents: LineNameEvent[];
  MIN_DATE: string;
  MAX_DATE: string;
};
