/**
 * 西武新宿線（西武新宿～本川越）の駅履歴データ
 * 新宿→本川越の順で order を定義
 * 緯度経度: train.teraren.com /lines/22007/stations.json（西武新宿のみ経度を補正）
 * 沿革: Wikipedia「西武新宿線」年表・各駅記事
 */
import type { StationEvent } from './types';

export const seibuShinjukuStationEvents: StationEvent[] = [
  // --- 川越鉄道期（現・新宿線 東村山以北）---
  { date: '1895-03-21', type: 'open', stationName: '所沢', lat: 35.786627, lon: 139.473324, order: 22 },
  { date: '1895-03-21', type: 'open', stationName: '入曽', lat: 35.832481, lon: 139.427304, order: 25 },
  { date: '1895-03-21', type: 'open', stationName: '川越', lat: 35.913524, lon: 139.481125, order: 29 },
  { date: '1895-08-06', type: 'open', stationName: '東村山', lat: 35.76006, lon: 139.465839, order: 21 },
  { date: '1922-04-25', type: 'open', stationName: '入間川', lat: 35.856936, lon: 139.413015, order: 26 },

  // 1927-04-16 村山線開業・川越線区間電化（高田馬場仮～東村山・既存区間）
  { date: '1927-04-16', type: 'open', stationName: '高田馬場', lat: 35.712677, lon: 139.703715, order: 2 },
  { date: '1927-04-16', type: 'open', stationName: '下落合', lat: 35.715846, lon: 139.695391, order: 3 },
  { date: '1927-04-16', type: 'open', stationName: '中井', lat: 35.715106, lon: 139.686967, order: 4 },
  { date: '1927-04-16', type: 'open', stationName: '新井薬師前', lat: 35.715778, lon: 139.672582, order: 5 },
  { date: '1927-04-16', type: 'open', stationName: '沼袋', lat: 35.719458, lon: 139.663841, order: 6 },
  { date: '1927-04-16', type: 'open', stationName: '野方', lat: 35.719658, lon: 139.652733, order: 7 },
  { date: '1927-04-16', type: 'open', stationName: '都立家政', lat: 35.722313, lon: 139.644839, order: 8 },
  { date: '1927-04-16', type: 'open', stationName: '鷺ノ宮', lat: 35.722605, lon: 139.63892, order: 9 },
  { date: '1927-04-16', type: 'open', stationName: '西鷺宮', lat: 35.723229, lon: 139.631804, order: 9.5 },
  { date: '1927-04-16', type: 'open', stationName: '下井草', lat: 35.723852, lon: 139.624688, order: 10 },
  { date: '1927-04-16', type: 'open', stationName: '井荻', lat: 35.72469, lon: 139.615303, order: 11 },
  { date: '1927-04-16', type: 'open', stationName: '上井草', lat: 35.725326, lon: 139.602937, order: 12 },
  { date: '1927-04-16', type: 'open', stationName: '上石神井', lat: 35.726189, lon: 139.592266, order: 13 },
  { date: '1927-04-16', type: 'open', stationName: '武蔵関', lat: 35.7276, lon: 139.576417, order: 14 },
  { date: '1927-04-16', type: 'open', stationName: '上保谷', lat: 35.728761, lon: 139.563529, order: 15 },
  { date: '1927-04-16', type: 'open', stationName: '西武柳沢', lat: 35.728621, lon: 139.552477, order: 16 },
  { date: '1927-04-16', type: 'open', stationName: '田無', lat: 35.727307, lon: 139.539259, order: 17 },
  { date: '1927-04-16', type: 'open', stationName: '花小金井', lat: 35.726129, lon: 139.513228, order: 18 },
  { date: '1927-04-16', type: 'open', stationName: '小平', lat: 35.736963, lon: 139.488491, order: 19 },
  { date: '1927-04-16', type: 'open', stationName: '久米川', lat: 35.749575, lon: 139.472653, order: 20 },

  { date: '1932-12-26', type: 'open', stationName: '所沢飛行場前', lat: 35.79245, lon: 139.46948, order: 22.5 },
  { date: '1933-03-25', type: 'open', stationName: '南大塚', lat: 35.889663, lon: 139.454189, order: 28 },

  { date: '1940-04-23', type: 'open', stationName: '東小平', lat: 35.731546, lon: 139.50086, order: 18.5 },
  { date: '1940-07-22', type: 'rename', stationName: '本川越', previousName: '川越', lat: 35.913524, lon: 139.481125, order: 29 },
  { date: '1940-12-01', type: 'rename', stationName: '所沢御幸町', previousName: '所沢飛行場前', lat: 35.79245, lon: 139.46948, order: 22.5 },
  { date: '1942-11-01', type: 'rename', stationName: '東伏見', previousName: '上保谷', lat: 35.728761, lon: 139.563529, order: 15 },

  { date: '1951-06-11', type: 'close', stationName: '所沢御幸町', lat: 35.79245, lon: 139.46948, order: 22.5 },
  { date: '1951-06-11', type: 'open', stationName: '新所沢', lat: 35.805854, lon: 139.457069, order: 24 },
  { date: '1952-03-25', type: 'open', stationName: '西武新宿', lat: 35.695917, lon: 139.700758, order: 1 },
  { date: '1953-01-15', type: 'close', stationName: '西鷺宮', lat: 35.723229, lon: 139.631804, order: 9.5 },
  { date: '1954-10-10', type: 'close', stationName: '東小平', lat: 35.731546, lon: 139.50086, order: 18.5 },
  { date: '1959-04-01', type: 'rename', stationName: '狭山市', previousName: '入間川', lat: 35.856936, lon: 139.413015, order: 26 },

  { date: '1970-04-16', type: 'open', stationName: '新狭山', lat: 35.873993, lon: 139.433499, order: 27 },
  { date: '1978-12-02', type: 'open', stationName: '所沢飛行場前', lat: 35.798272, lon: 139.465641, order: 23 },
  { date: '1993-04-28', type: 'rename', stationName: '航空公園', previousName: '所沢飛行場前', lat: 35.798272, lon: 139.465641, order: 23 },
];

export const SEIBU_SHINJUKU_MIN_DATE = '1895-03-21';
export const SEIBU_SHINJUKU_MAX_DATE = '2025-12-31';
