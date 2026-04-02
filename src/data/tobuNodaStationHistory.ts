/**
 * 東武野田線（アーバンパークライン）大宮～船橋の駅履歴
 * 大宮→船橋の順で order を定義。座標は train.teraren.com 路線コード 21004 を参照。
 */
import type { StationEvent } from './types';

export const tobuNodaStationEvents: StationEvent[] = [
  // 1911-05-09 千葉県営鉄道 野田町～柏
  { date: '1911-05-09', type: 'open', stationName: '野田町', lat: 35.943652, lon: 139.870728, order: 17 },
  { date: '1911-05-09', type: 'open', stationName: '梅郷', lat: 35.931575, lon: 139.891086, order: 18 },
  { date: '1911-05-09', type: 'open', stationName: '運河', lat: 35.914392, lon: 139.906063, order: 19 },
  { date: '1911-05-09', type: 'open', stationName: '江戸川台', lat: 35.897344, lon: 139.91045, order: 20 },
  { date: '1911-05-09', type: 'open', stationName: '初石', lat: 35.883783, lon: 139.917861, order: 21 },
  { date: '1911-05-09', type: 'open', stationName: '豊四季', lat: 35.86657, lon: 139.93929, order: 23 },
  { date: '1911-05-09', type: 'open', stationName: '柏', lat: 35.862316, lon: 139.971148, order: 24 },
  // 1923-12-27 北総鉄道 船橋線 船橋～柏
  { date: '1923-12-27', type: 'open', stationName: '船橋', lat: 35.7021, lon: 139.98436, order: 35 },
  { date: '1923-12-27', type: 'open', stationName: '塚田', lat: 35.722102, lon: 139.982859, order: 33 },
  { date: '1923-12-27', type: 'open', stationName: '馬込沢', lat: 35.741586, lon: 139.992199, order: 32 },
  { date: '1923-12-27', type: 'open', stationName: '鎌ヶ谷', lat: 35.763765, lon: 139.997266, order: 31 },
  { date: '1923-12-27', type: 'open', stationName: '高柳', lat: 35.808211, lon: 139.998936, order: 28 },
  { date: '1923-12-27', type: 'open', stationName: '六実', lat: 35.793715, lon: 139.999195, order: 29 },
  { date: '1923-12-27', type: 'open', stationName: '増尾', lat: 35.829704, lon: 139.976604, order: 26 },
  // 1929-09-01 野田町～清水公園
  { date: '1929-09-01', type: 'open', stationName: '清水公園', lat: 35.959364, lon: 139.85967, order: 15 },
  { date: '1929-09-01', type: 'open', stationName: '愛宕', lat: 35.950154, lon: 139.864817, order: 16 },
  // 1929-11-17 粕壁（春日部）～大宮仮
  { date: '1929-11-17', type: 'open', stationName: '大宮公園', lat: 35.92374, lon: 139.632903, order: 3 },
  { date: '1929-11-17', type: 'open', stationName: '大和田', lat: 35.929359, lon: 139.65051, order: 4 },
  { date: '1929-11-17', type: 'open', stationName: '七里', lat: 35.936464, lon: 139.665948, order: 5 },
  { date: '1929-11-17', type: 'open', stationName: '岩槻', lat: 35.950239, lon: 139.693197, order: 6 },
  { date: '1929-11-17', type: 'open', stationName: '豊春', lat: 35.968014, lon: 139.72601, order: 8 },
  { date: '1929-11-17', type: 'open', stationName: '八木崎', lat: 35.978376, lon: 139.741785, order: 9 },
  { date: '1929-11-17', type: 'open', stationName: '春日部', lat: 35.980095, lon: 139.752345, order: 10 },
  // 1929-12-09 大宮仮～大宮（国鉄接続）
  { date: '1929-12-09', type: 'open', stationName: '大宮', lat: 35.907599, lon: 139.624458, order: 1 },
  // 1930-04-12 北大宮
  { date: '1930-04-12', type: 'open', stationName: '北大宮', lat: 35.91716, lon: 139.624726, order: 2 },
  // 1930-10-01 清水公園～粕壁 全通
  { date: '1930-10-01', type: 'open', stationName: '川間', lat: 35.979172, lon: 139.83385, order: 13 },
  // 1930-12-09 臨時 永沼（のち南桜井）
  { date: '1930-12-09', type: 'open', stationName: '永沼', lat: 35.980441, lon: 139.807988, order: 12 },
  // 1931-03-01 牛島（のち藤の牛島）
  { date: '1931-03-01', type: 'open', stationName: '牛島', lat: 35.98026, lon: 139.778038, order: 11 },
  { date: '1931-03-05', type: 'rename', stationName: '藤の牛島', previousName: '牛島', lat: 35.98026, lon: 139.778038, order: 11 },
  { date: '1931-07-03', type: 'rename', stationName: '南桜井', previousName: '永沼', lat: 35.980441, lon: 139.807988, order: 12 },
  // 1933-07-29 逆井
  { date: '1933-07-29', type: 'open', stationName: '逆井', lat: 35.823336, lon: 139.983812, order: 27 },
  // 1950-05-30 野田町→野田市
  { date: '1950-05-30', type: 'rename', stationName: '野田市', previousName: '野田町', lat: 35.943652, lon: 139.870728, order: 17 },
  // 1956-09-15 新船橋
  { date: '1956-09-15', type: 'open', stationName: '新船橋', lat: 35.710993, lon: 139.979765, order: 34 },
  // 1968-07-01 七光台
  { date: '1968-07-01', type: 'open', stationName: '七光台', lat: 35.970884, lon: 139.852906, order: 14 },
  // 1969-12-01 東岩槻
  { date: '1969-12-01', type: 'open', stationName: '東岩槻', lat: 35.963273, lon: 139.712192, order: 7 },
  // 1983-07-21 新柏
  { date: '1983-07-21', type: 'open', stationName: '新柏', lat: 35.838128, lon: 139.966994, order: 25 },
  // 1999-11-25 新鎌ヶ谷
  { date: '1999-11-25', type: 'open', stationName: '新鎌ヶ谷', lat: 35.780221, lon: 139.999455, order: 30 },
  // 2005-08-24 流山おおたかの森
  { date: '2005-08-24', type: 'open', stationName: '流山おおたかの森', lat: 35.872051, lon: 139.925898, order: 22 },
];

export const TOBU_NODA_MIN_DATE = '1911-05-09';
export const TOBU_NODA_MAX_DATE = '2025-12-31';
