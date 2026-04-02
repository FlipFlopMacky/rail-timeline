/**
 * JR埼京線（大崎～大宮）の駅履歴
 * 大崎→大宮の並びで order を定義
 * 開業日は Wikipedia「埼京線」年表・各駅に基づき、埼京線列車の乗り入れ／新駅供用開始に合わせる
 * 座標は train.teraren.com 路線コード 11321（大宮まで）を参照
 */
import type { StationEvent } from './types';

export const jrSaikyoStationEvents: StationEvent[] = [
  { date: '1985-09-30', type: 'open', stationName: '池袋', lat: 35.730256, lon: 139.711086, order: 5 },
  { date: '1985-09-30', type: 'open', stationName: '板橋', lat: 35.745435, lon: 139.719507, order: 6 },
  { date: '1985-09-30', type: 'open', stationName: '十条', lat: 35.760321, lon: 139.722233, order: 7 },
  { date: '1985-09-30', type: 'open', stationName: '赤羽', lat: 35.778026, lon: 139.720928, order: 8 },
  { date: '1985-09-30', type: 'open', stationName: '北赤羽', lat: 35.787007, lon: 139.70569, order: 9 },
  { date: '1985-09-30', type: 'open', stationName: '浮間舟渡', lat: 35.791209, lon: 139.691341, order: 10 },
  { date: '1985-09-30', type: 'open', stationName: '戸田公園', lat: 35.807906, lon: 139.678203, order: 11 },
  { date: '1985-09-30', type: 'open', stationName: '戸田', lat: 35.817665, lon: 139.669548, order: 12 },
  { date: '1985-09-30', type: 'open', stationName: '北戸田', lat: 35.826883, lon: 139.661201, order: 13 },
  { date: '1985-09-30', type: 'open', stationName: '武蔵浦和', lat: 35.845422, lon: 139.646809, order: 14 },
  { date: '1985-09-30', type: 'open', stationName: '中浦和', lat: 35.853769, lon: 139.6375, order: 15 },
  { date: '1985-09-30', type: 'open', stationName: '南与野', lat: 35.867456, lon: 139.631117, order: 16 },
  { date: '1985-09-30', type: 'open', stationName: '与野本町', lat: 35.880968, lon: 139.626075, order: 17 },
  { date: '1985-09-30', type: 'open', stationName: '北与野', lat: 35.890678, lon: 139.628521, order: 18 },
  { date: '1985-09-30', type: 'open', stationName: '大宮', lat: 35.906439, lon: 139.62405, order: 19 },
  { date: '1986-03-03', type: 'open', stationName: '新宿', lat: 35.689729, lon: 139.700464, order: 4 },
  { date: '1996-03-16', type: 'open', stationName: '恵比寿', lat: 35.646685, lon: 139.71007, order: 2 },
  { date: '1996-03-16', type: 'open', stationName: '渋谷', lat: 35.658871, lon: 139.701238, order: 3 },
  { date: '2002-12-01', type: 'open', stationName: '大崎', lat: 35.619772, lon: 139.728439, order: 1 },
];

export const JR_SAIKYO_MIN_DATE = '1985-09-30';
export const JR_SAIKYO_MAX_DATE = '2025-12-31';
