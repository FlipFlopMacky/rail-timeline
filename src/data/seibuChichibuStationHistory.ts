/**
 * 西武秩父線（吾野～西武秩父）の駅履歴データ
 * 吾野→西武秩父の順で並び順を定義
 * 緯度経度は rosenzu.net を参照
 * 沿革: Wikipedia 西武秩父線
 */
import type { StationEvent } from './types';

export const seibuChichibuStationEvents: StationEvent[] = [
  // 1969-10-14 全線開業（吾野～西武秩父）
  { date: '1969-10-14', type: 'open', stationName: '吾野', lat: 35.908485, lon: 139.226718, order: 1 },
  { date: '1969-10-14', type: 'open', stationName: '西吾野', lat: 35.926393, lon: 139.202195, order: 2 },
  { date: '1969-10-14', type: 'open', stationName: '正丸', lat: 35.938313, lon: 139.182099, order: 3 },
  { date: '1969-10-14', type: 'open', stationName: '芦ヶ久保', lat: 35.976896, lon: 139.136884, order: 4 },
  { date: '1969-10-14', type: 'open', stationName: '横瀬', lat: 35.985548, lon: 139.097818, order: 5 },
  { date: '1969-10-14', type: 'open', stationName: '西武秩父', lat: 35.989939, lon: 139.083473, order: 6 },
  // 東横瀬駅（貨物駅・芦ヶ久保～横瀬間）は1996年廃止。旅客営業は対象外のため未収録
];

export const SEIBU_CHICHIBU_MIN_DATE = '1969-10-14';
export const SEIBU_CHICHIBU_MAX_DATE = '2025-12-31';
