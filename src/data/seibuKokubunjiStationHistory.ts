/**
 * 西武国分寺線（国分寺～東村山）の駅履歴データ
 * 国分寺→東村山の順で order を定義
 * 緯度経度: train.teraren.com /lines/22010/stations.json
 * 沿革: Wikipedia「西武国分寺線」および各駅記事
 */
import type { StationEvent } from './types';

export const seibuKokubunjiStationEvents: StationEvent[] = [
  // 1894-12-21 川越鉄道 国分寺～久米川（仮）開業。現国分寺線区間の国分寺・小川が開業
  { date: '1894-12-21', type: 'open', stationName: '国分寺', lat: 35.700123, lon: 139.480841, order: 1 },
  { date: '1894-12-21', type: 'open', stationName: '小川', lat: 35.737573, lon: 139.463493, order: 4 },
  { date: '1895-08-06', type: 'open', stationName: '東村山', lat: 35.76006, lon: 139.465839, order: 5 },
  { date: '1948-10-21', type: 'open', stationName: '鷹の台', lat: 35.723097, lon: 139.461155, order: 3 },
  { date: '1955-02-10', type: 'open', stationName: '恋ヶ窪', lat: 35.711385, lon: 139.463944, order: 2 },
];

export const SEIBU_KOKUBUNJI_MIN_DATE = '1894-12-21';
export const SEIBU_KOKUBUNJI_MAX_DATE = '2025-12-31';
