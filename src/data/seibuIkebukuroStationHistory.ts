/**
 * 西武池袋線（池袋～吾野）の駅履歴データ
 * 池袋→吾野の順で並び順を定義
 * 緯度経度は train.teraren.com / rosenzu.net を参照
 * 沿革: Wikipedia 西武池袋線
 */
import type { StationEvent } from './types';

export const seibuIkebukuroStationEvents: StationEvent[] = [
  // 1915-04-15 武蔵野鉄道 池袋～飯能 開業
  { date: '1915-04-15', type: 'open', stationName: '池袋', lat: 35.72913, lon: 139.711461, order: 1 },
  { date: '1915-04-15', type: 'open', stationName: '東長崎', lat: 35.730213, lon: 139.683005, order: 3 },
  { date: '1915-04-15', type: 'open', stationName: '練馬', lat: 35.73782, lon: 139.653566, order: 6 },
  { date: '1915-04-15', type: 'open', stationName: '石神井', lat: 35.743554, lon: 139.607028, order: 10 },
  { date: '1933-03-01', type: 'rename', stationName: '石神井公園', previousName: '石神井', lat: 35.743554, lon: 139.607028, order: 10 },
  { date: '1915-04-15', type: 'open', stationName: '保谷', lat: 35.748328, lon: 139.567556, order: 12 },
  { date: '1915-04-15', type: 'open', stationName: '東久留米', lat: 35.76032, lon: 139.533936, order: 14 },
  { date: '1915-04-15', type: 'open', stationName: '所沢', lat: 35.786201, lon: 139.473916, order: 17 },
  { date: '1915-04-15', type: 'open', stationName: '小手指', lat: 35.789264, lon: 139.456014, order: 18 },
  { date: '1915-09-01', type: 'rename', stationName: '西所沢', previousName: '小手指', lat: 35.789264, lon: 139.456014, order: 18 },
  { date: '1970-11-20', type: 'open', stationName: '小手指', lat: 35.800579, lon: 139.438016, order: 19 }, // 小手指ヶ原信号所→駅
  { date: '1915-04-15', type: 'open', stationName: '元狭山', lat: 35.810453, lon: 139.416748, order: 20 },
  { date: '1915-09-01', type: 'rename', stationName: '三ヶ島村', previousName: '元狭山', lat: 35.810453, lon: 139.416748, order: 20 },
  { date: '1933-03-01', type: 'rename', stationName: '狭山ヶ丘', previousName: '三ヶ島村', lat: 35.810453, lon: 139.416748, order: 20 },
  { date: '1915-04-15', type: 'open', stationName: '豊岡町', lat: 35.841987, lon: 139.389541, order: 23 },
  { date: '1967-04-01', type: 'rename', stationName: '入間市', previousName: '豊岡町', lat: 35.841987, lon: 139.389541, order: 23 },
  { date: '1915-04-15', type: 'open', stationName: '仏子', lat: 35.837878, lon: 139.360037, order: 24 },
  { date: '1915-04-15', type: 'open', stationName: '飯能', lat: 35.851189, lon: 139.318824, order: 26 },
  // 1917-12-12
  { date: '1917-12-12', type: 'open', stationName: '秋津', lat: 35.778281, lon: 139.49675, order: 16 },
  // 1922-11-01 江古田（武蔵高等学校用仮停留所→1923年本営業）
  { date: '1922-11-01', type: 'open', stationName: '江古田', lat: 35.737376, lon: 139.672756, order: 4 },
  // 1924-06-11
  { date: '1924-06-11', type: 'open', stationName: '椎名町', lat: 35.7266, lon: 139.694835, order: 2 },
  { date: '1924-06-11', type: 'open', stationName: '中村橋', lat: 35.736798, lon: 139.637767, order: 7 },
  { date: '1924-06-11', type: 'open', stationName: '田無町', lat: 35.751622, lon: 139.544913, order: 13 },
  { date: '1959-05-01', type: 'rename', stationName: 'ひばりヶ丘', previousName: '田無町', lat: 35.751622, lon: 139.544913, order: 13 },
  { date: '1924-06-11', type: 'open', stationName: '清瀬', lat: 35.772121, lon: 139.519909, order: 15 },
  // 1924-11-01
  { date: '1924-11-01', type: 'open', stationName: '東大泉', lat: 35.749539, lon: 139.586552, order: 11 },
  { date: '1933-03-01', type: 'rename', stationName: '大泉学園', previousName: '東大泉', lat: 35.749539, lon: 139.586552, order: 11 },
  // 1925-03-15 貫井→1933-03-01 富士見台
  { date: '1925-03-15', type: 'open', stationName: '貫井', lat: 35.735928, lon: 139.629993, order: 8 },
  { date: '1933-03-01', type: 'rename', stationName: '富士見台', previousName: '貫井', lat: 35.735928, lon: 139.629993, order: 8 },
  // 1926-04-01
  { date: '1926-04-01', type: 'open', stationName: '武蔵藤沢', lat: 35.821221, lon: 139.412572, order: 21 },
  // 1926-04-03
  { date: '1926-04-03', type: 'open', stationName: '元加治', lat: 35.840522, lon: 139.345744, order: 25 },
  // 1933-04-01
  { date: '1933-04-01', type: 'open', stationName: '稲荷山公園', lat: 35.845145, lon: 139.398404, order: 22 },
  // 1936-07-10 桜台（1945休止、1948再開→openのまま運用）
  { date: '1936-07-10', type: 'open', stationName: '桜台', lat: 35.738759, lon: 139.662415, order: 5 },
  // 1931-12-10
  { date: '1931-12-10', type: 'open', stationName: '東飯能', lat: 35.852928, lon: 139.325965, order: 27 },
  // 1929-09-10 飯能～吾野延伸
  { date: '1929-09-10', type: 'open', stationName: '虎秀', lat: 35.892439, lon: 139.260281, order: 30 },
  { date: '1933-03-01', type: 'rename', stationName: '東吾野', previousName: '虎秀', lat: 35.892439, lon: 139.260281, order: 30 },
  { date: '1929-09-10', type: 'open', stationName: '吾野', lat: 35.908502, lon: 139.226787, order: 31 },
  // 1970-11-20 武蔵横手信号所→駅
  { date: '1970-11-20', type: 'open', stationName: '武蔵横手', lat: 35.885256, lon: 139.280667, order: 29 },
  // 高麗駅（天覧山駅跡に近い位置、1929年吾野延伸時か）
  { date: '1929-09-10', type: 'open', stationName: '高麗', lat: 35.881982, lon: 139.304414, order: 28 },
  // 1994-12-07
  { date: '1994-12-07', type: 'open', stationName: '練馬高野台', lat: 35.740541, lon: 139.616974, order: 9 },
];

export const SEIBU_IKEBUKURO_MIN_DATE = '1915-04-15';
export const SEIBU_IKEBUKURO_MAX_DATE = '2025-12-31';
