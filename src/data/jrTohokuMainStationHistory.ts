/**
 * JR東北本線（東京～黒磯）
 * 停車場の並び・座標は train.teraren.com 路線コード 11319（旅客案内の宇都宮線と同一区間）
 * 開業日は各駅の Wikipedia 等に基づく旅客駅としての開業
 */
import type { StationEvent } from './types';

export const jrTohokuMainStationEvents: StationEvent[] = [
  { date: '1883-07-28', type: 'open', stationName: '上野', lat: 35.71379, lon: 139.777043, order: 2 },
  { date: '1885-03-01', type: 'open', stationName: '赤羽', lat: 35.778026, lon: 139.720928, order: 4 },
  { date: '1885-03-01', type: 'open', stationName: '浦和', lat: 35.858496, lon: 139.657109, order: 5 },
  { date: '1885-03-01', type: 'open', stationName: '大宮', lat: 35.906439, lon: 139.62405, order: 7 },
  { date: '1885-03-01', type: 'open', stationName: '蓮田', lat: 35.981272, lon: 139.653016, order: 10 },
  { date: '1885-03-01', type: 'open', stationName: '白岡', lat: 36.01774, lon: 139.666826, order: 11 },
  { date: '1885-03-01', type: 'open', stationName: '久喜', lat: 36.065684, lon: 139.67727, order: 13 },
  { date: '1885-03-01', type: 'open', stationName: '栗橋', lat: 36.136852, lon: 139.694177, order: 15 },
  { date: '1885-03-01', type: 'open', stationName: '宇都宮', lat: 36.559246, lon: 139.898389, order: 24 },
  { date: '1885-07-16', type: 'open', stationName: '古河', lat: 36.194375, lon: 139.709726, order: 16 },
  { date: '1885-07-16', type: 'open', stationName: '小山', lat: 36.312747, lon: 139.806241, order: 19 },
  { date: '1885-07-16', type: 'open', stationName: '石橋', lat: 36.43651, lon: 139.866536, order: 22 },
  { date: '1886-10-01', type: 'open', stationName: '矢板', lat: 36.80655, lon: 139.932912, order: 30 },
  { date: '1886-10-01', type: 'open', stationName: '西那須野', lat: 36.883726, lon: 139.986383, order: 32 },
  { date: '1886-12-01', type: 'open', stationName: '黒磯', lat: 36.970128, lon: 140.060204, order: 34 },
  { date: '1893-03-25', type: 'open', stationName: '小金井', lat: 36.374435, lon: 139.842232, order: 20 },
  { date: '1894-04-01', type: 'open', stationName: '間々田', lat: 36.257907, lon: 139.761039, order: 18 },
  { date: '1895-07-06', type: 'open', stationName: '雀宮', lat: 36.493845, lon: 139.876811, order: 23 },
  { date: '1897-02-25', type: 'open', stationName: '氏家', lat: 36.681696, lon: 139.9621, order: 27 },
  { date: '1897-02-25', type: 'open', stationName: '野崎', lat: 36.843722, lon: 139.957752, order: 31 },
  { date: '1897-06-05', type: 'open', stationName: '片岡', lat: 36.754557, lon: 139.945665, order: 29 },
  { date: '1898-11-28', type: 'open', stationName: '那須塩原', lat: 36.931956, lon: 140.020694, order: 33 },
  { date: '1899-10-21', type: 'open', stationName: '宝積寺', lat: 36.631703, lon: 139.979487, order: 26 },
  { date: '1914-12-20', type: 'open', stationName: '東京', lat: 35.681391, lon: 139.766103, order: 1 },
  { date: '1923-02-11', type: 'open', stationName: '蒲須坂', lat: 36.720727, lon: 139.950461, order: 28 },
  { date: '1929-06-20', type: 'open', stationName: '尾久', lat: 35.74683, lon: 139.753846, order: 3 },
  { date: '1963-02-16', type: 'open', stationName: '野木', lat: 36.229963, lon: 139.734729, order: 17 },
  { date: '1964-03-20', type: 'open', stationName: '東大宮', lat: 35.948751, lon: 139.640291, order: 9 },
  { date: '1981-04-15', type: 'open', stationName: '東鷲宮', lat: 36.089428, lon: 139.67913, order: 14 },
  { date: '1983-10-01', type: 'open', stationName: '土呂', lat: 35.931997, lon: 139.63214, order: 8 },
  { date: '1991-03-16', type: 'open', stationName: '自治医大', lat: 36.39543, lon: 139.854524, order: 21 },
  { date: '1997-03-25', type: 'open', stationName: '岡本', lat: 36.598182, lon: 139.944363, order: 25 },
  { date: '2000-04-01', type: 'open', stationName: 'さいたま新都心', lat: 35.893867, lon: 139.633587, order: 6 },
  { date: '2009-03-14', type: 'open', stationName: '新白岡', lat: 36.038732, lon: 139.67208, order: 12 },
];

export const JR_TOHOKU_MAIN_MIN_DATE = '1883-07-28';
export const JR_TOHOKU_MAIN_MAX_DATE = '2025-12-31';
