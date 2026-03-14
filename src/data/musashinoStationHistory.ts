/**
 * JR武蔵野線（府中本町～西船橋）の駅履歴データ
 * 府中本町→西船橋の順で並び順を定義
 * 緯度経度は train.teraren.com（Google Maps連携）を参照
 */
import type { StationEvent } from './types';

export const musashinoStationEvents: StationEvent[] = [
  // 1973-04-01 府中本町～新松戸 開業
  { date: '1973-04-01', type: 'open', stationName: '府中本町', lat: 35.665766, lon: 139.477142, order: 1 },
  { date: '1973-04-01', type: 'open', stationName: '北府中', lat: 35.68088, lon: 139.471792, order: 2 },
  { date: '1973-04-01', type: 'open', stationName: '西国分寺', lat: 35.699744, lon: 139.465994, order: 3 },
  { date: '1973-04-01', type: 'open', stationName: '新小平', lat: 35.73128, lon: 139.470745, order: 4 },
  { date: '1973-04-01', type: 'open', stationName: '新秋津', lat: 35.778331, lon: 139.493592, order: 5 },
  { date: '1973-04-01', type: 'open', stationName: '東所沢', lat: 35.79461, lon: 139.513878, order: 6 },
  { date: '1973-04-01', type: 'open', stationName: '新座', lat: 35.80381, lon: 139.556328, order: 7 },
  { date: '1973-04-01', type: 'open', stationName: '北朝霞', lat: 35.815475, lon: 139.587322, order: 8 },
  { date: '1973-04-01', type: 'open', stationName: '西浦和', lat: 35.844139, lon: 139.627707, order: 9 },
  { date: '1973-04-01', type: 'open', stationName: '南浦和', lat: 35.847648, lon: 139.669125, order: 11 },
  { date: '1973-04-01', type: 'open', stationName: '東浦和', lat: 35.864079, lon: 139.704627, order: 12 },
  { date: '1973-04-01', type: 'open', stationName: '東川口', lat: 35.875246, lon: 139.744087, order: 13 },
  { date: '1973-04-01', type: 'open', stationName: '南越谷', lat: 35.876106, lon: 139.790499, order: 14 },
  { date: '1973-04-01', type: 'open', stationName: '吉川', lat: 35.87662, lon: 139.843162, order: 16 },
  { date: '1973-04-01', type: 'open', stationName: '三郷', lat: 35.845004, lon: 139.886341, order: 19 },
  { date: '1973-04-01', type: 'open', stationName: '南流山', lat: 35.838035, lon: 139.903865, order: 20 },
  { date: '1973-04-01', type: 'open', stationName: '新松戸', lat: 35.825467, lon: 139.921076, order: 21 },
  // 1978-10-02 新松戸～西船橋 延伸
  { date: '1978-10-02', type: 'open', stationName: '新八柱', lat: 35.792013, lon: 139.938393, order: 22 },
  { date: '1978-10-02', type: 'open', stationName: '市川大野', lat: 35.755432, lon: 139.951227, order: 24 },
  { date: '1978-10-02', type: 'open', stationName: '船橋法典', lat: 35.730435, lon: 139.966771, order: 25 },
  { date: '1978-10-02', type: 'open', stationName: '西船橋', lat: 35.707283, lon: 139.959536, order: 26 },
  // 1985-03-14 新三郷開業
  { date: '1985-03-14', type: 'open', stationName: '新三郷', lat: 35.858667, lon: 139.869341, order: 18 },
  // 1985-09-30 武蔵浦和開業
  { date: '1985-09-30', type: 'open', stationName: '武蔵浦和', lat: 35.846047, lon: 139.647974, order: 10 },
  // 1998-03-14 東松戸開業
  { date: '1998-03-14', type: 'open', stationName: '東松戸', lat: 35.770611, lon: 139.943848, order: 23 },
  // 2008-03-15 越谷レイクタウン開業
  { date: '2008-03-15', type: 'open', stationName: '越谷レイクタウン', lat: 35.876199, lon: 139.822012, order: 15 },
  // 2012-03-17 吉川美南開業
  { date: '2012-03-17', type: 'open', stationName: '吉川美南', lat: 35.868056, lon: 139.858167, order: 17 },
];

export const MUSASHINO_MIN_DATE = '1973-04-01';
export const MUSASHINO_MAX_DATE = '2025-12-31';
