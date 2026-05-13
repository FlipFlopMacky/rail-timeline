/**
 * 西武狭山線（西所沢～西武球場前）
 * 西所沢→下山口→西武球場前の順で order を定義
 * 緯度経度: Wikipedia 各駅（座標欄）
 * 沿革: Wikipedia「西武狭山線」「西所沢」「下山口」「西武球場前」各記事
 * 西所沢は池袋線で1915年開業だが、越生線データと同様に狭山線全通日に合わせて1929-05-01を起点とする
 */
import type { StationEvent } from './types';

export const seibuSayamaStationEvents: StationEvent[] = [
  { date: '1929-05-01', type: 'open', stationName: '西所沢', lat: 35.789264, lon: 139.456014, order: 1 },
  { date: '1929-05-01', type: 'open', stationName: '下山口', lat: 35.779364, lon: 139.44083, order: 2 },
  { date: '1929-05-01', type: 'open', stationName: '村山公園', lat: 35.770403, lon: 139.418822, order: 3 },
  { date: '1933-03-01', type: 'rename', stationName: '村山貯水池際', previousName: '村山公園', lat: 35.770403, lon: 139.418822, order: 3 },
  { date: '1941-04-01', type: 'rename', stationName: '村山', previousName: '村山貯水池際', lat: 35.770403, lon: 139.418822, order: 3 },
  { date: '1944-02-28', type: 'close', stationName: '下山口', lat: 35.779364, lon: 139.44083, order: 2 },
  { date: '1944-02-28', type: 'close', stationName: '村山', lat: 35.770403, lon: 139.418822, order: 3 },
  { date: '1951-10-07', type: 'open', stationName: '狭山湖', lat: 35.770403, lon: 139.418822, order: 3 },
  { date: '1976-06-04', type: 'open', stationName: '下山口', lat: 35.779364, lon: 139.44083, order: 2 },
  { date: '1979-03-15', type: 'rename', stationName: '西武球場前', previousName: '狭山湖', lat: 35.770403, lon: 139.418822, order: 3 },
];

export const SEIBU_SAYAMA_MIN_DATE = '1929-05-01';
export const SEIBU_SAYAMA_MAX_DATE = '1979-03-15';
