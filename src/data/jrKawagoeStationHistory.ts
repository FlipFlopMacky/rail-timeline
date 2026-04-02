/**
 * JR川越線（大宮～高麗川）の駅履歴
 * 大宮→高麗川の並びで order を定義。西大宮は order 3（1940年時点では未開業のため order 2 と 4 の間に挿入）
 * 座標は train.teraren.com 路線コード 11322 を参照
 */
import type { StationEvent } from './types';

export const jrKawagoeStationEvents: StationEvent[] = [
  { date: '1940-07-22', type: 'open', stationName: '大宮', lat: 35.906439, lon: 139.62405, order: 1 },
  { date: '1940-07-22', type: 'open', stationName: '日進', lat: 35.931555, lon: 139.606111, order: 2 },
  { date: '1940-07-22', type: 'open', stationName: '指扇', lat: 35.917023, lon: 139.564951, order: 4 },
  { date: '1940-07-22', type: 'open', stationName: '南古谷', lat: 35.903344, lon: 139.519082, order: 5 },
  { date: '1940-07-22', type: 'open', stationName: '川越', lat: 35.906742, lon: 139.483078, order: 6 },
  { date: '1940-07-22', type: 'open', stationName: '西川越', lat: 35.91909, lon: 139.459746, order: 7 },
  { date: '1940-07-22', type: 'open', stationName: '的場', lat: 35.917478, lon: 139.435376, order: 8 },
  { date: '1940-07-22', type: 'open', stationName: '笠幡', lat: 35.907551, lon: 139.40622, order: 9 },
  { date: '1940-07-22', type: 'open', stationName: '武蔵高萩', lat: 35.901729, lon: 139.371123, order: 10 },
  { date: '1940-07-22', type: 'open', stationName: '高麗川', lat: 35.896328, lon: 139.33809, order: 11 },
  { date: '2009-03-14', type: 'open', stationName: '西大宮', lat: 35.922281, lon: 139.579797, order: 3 },
];

export const JR_KAWAGOE_MIN_DATE = '1940-07-22';
export const JR_KAWAGOE_MAX_DATE = '2025-12-31';
