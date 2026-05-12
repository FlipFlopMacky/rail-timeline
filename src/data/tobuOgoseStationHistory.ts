/**
 * 東武越生線（坂戸～越生）
 * 坂戸→越生の並びで order を定義
 * 座標は train.teraren.com 路線コード 21007 を参照
 * 開業日は Wikipedia 各駅・「東武越生線」（旅客全通 1934-12-16 等）に基づく
 * 坂戸は東上本線で 1916 年開業だが、本データでは越生線旅客全通に合わせ 1934-12-16 とする
 */
import type { StationEvent } from './types';

export const tobuOgoseStationEvents: StationEvent[] = [
  { date: '1934-12-16', type: 'open', stationName: '坂戸', lat: 35.957181, lon: 139.394032, order: 1 },
  { date: '1934-12-16', type: 'open', stationName: '一本松', lat: 35.94008, lon: 139.370062, order: 2 },
  { date: '1934-12-16', type: 'open', stationName: '川角', lat: 35.937438, lon: 139.346426, order: 4 },
  { date: '1934-12-16', type: 'open', stationName: '東毛呂', lat: 35.947058, lon: 139.315303, order: 6 },
  { date: '1934-12-16', type: 'open', stationName: '武州唐沢', lat: 35.952127, lon: 139.30912, order: 7 },
  { date: '1934-12-16', type: 'open', stationName: '越生', lat: 35.962559, lon: 139.299437, order: 8 },
  { date: '1936-02-28', type: 'open', stationName: '西大家', lat: 35.931698, lon: 139.356321, order: 3 },
  { date: '1938-10-01', type: 'open', stationName: '武州長瀬', lat: 35.942023, lon: 139.325561, order: 5 },
];

export const TOBU_OGOSE_MIN_DATE = '1934-12-16';
export const TOBU_OGOSE_MAX_DATE = '1938-10-01';
