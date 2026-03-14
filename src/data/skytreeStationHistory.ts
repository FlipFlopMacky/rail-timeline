/**
 * 東武スカイツリーライン（東武伊勢崎線 浅草～東武動物公園）の駅履歴データ
 * 浅草→東武動物公園の順で並び順を定義
 * 緯度経度は mapion.co.jp 等を参照
 */
import type { StationEvent } from './types';

export const skytreeStationEvents: StationEvent[] = [
  // 1899年 北千住～久喜間開業（東武鉄道創業）
  { date: '1899-08-27', type: 'open', stationName: '北千住', lat: 35.749295, lon: 139.805057, order: 9 },
  { date: '1899-08-27', type: 'open', stationName: '西新井', lat: 35.777278, lon: 139.790343, order: 13 },
  { date: '1899-08-27', type: 'open', stationName: '草加', lat: 35.82835, lon: 139.80344, order: 16 },
  { date: '1899-08-27', type: 'open', stationName: '越ヶ谷', lat: 35.901994, lon: 139.779889, order: 22 },
  { date: '1919-11-20', type: 'rename', stationName: '武州大沢', previousName: '越ヶ谷', lat: 35.901994, lon: 139.779889, order: 22 },
  { date: '1956-04-01', type: 'rename', stationName: '北越谷', previousName: '武州大沢', lat: 35.901994, lon: 139.779889, order: 22 },
  { date: '1899-08-27', type: 'open', stationName: '粕壁', lat: 35.979976, lon: 139.752591, order: 27 },
  { date: '1949-09-01', type: 'rename', stationName: '春日部', previousName: '粕壁', lat: 35.979976, lon: 139.752591, order: 27 },
  { date: '1899-08-27', type: 'open', stationName: '杉戸', lat: 36.024893, lon: 139.726741, order: 30 },
  { date: '1981-03-16', type: 'rename', stationName: '東武動物公園', previousName: '杉戸', lat: 36.024893, lon: 139.726741, order: 30 },
  // 1899年12月 新田・蒲生・武里開業（蒲生は現新越谷付近、1908年移転）
  { date: '1899-12-20', type: 'open', stationName: '新田', lat: 35.853922, lon: 139.795581, order: 18 },
  { date: '1899-12-20', type: 'open', stationName: '蒲生', lat: 35.866954, lon: 139.791681, order: 19 },
  { date: '1899-12-20', type: 'open', stationName: '武里', lat: 35.949125, lon: 139.770577, order: 25 },
  // 1902年 吾妻橋～北千住間開業
  { date: '1902-04-01', type: 'open', stationName: '吾妻橋', lat: 35.710439, lon: 139.809325, order: 2 },
  { date: '1910-03-01', type: 'rename', stationName: '浅草', previousName: '吾妻橋', lat: 35.710439, lon: 139.809325, order: 2 },
  { date: '1931-05-25', type: 'rename', stationName: '業平橋', previousName: '浅草', lat: 35.710439, lon: 139.809325, order: 2 },
  { date: '2012-03-17', type: 'rename', stationName: 'とうきょうスカイツリー', previousName: '業平橋', lat: 35.710439, lon: 139.809325, order: 2 },
  { date: '1902-04-01', type: 'open', stationName: '曳舟', lat: 35.718305, lon: 139.816677, order: 4 },
  { date: '1902-04-01', type: 'open', stationName: '鐘ヶ淵', lat: 35.733856, lon: 139.820615, order: 6 },
  // 1900年 竹ノ塚開業
  { date: '1900-03-21', type: 'open', stationName: '竹ノ塚', lat: 35.794498, lon: 139.790751, order: 14 },
  // 1905年 白鬚・堀切休止→1908年廃止、1924年再開業
  { date: '1924-10-01', type: 'open', stationName: '玉ノ井', lat: 35.725104, lon: 139.819407, order: 5 },
  { date: '1987-12-21', type: 'rename', stationName: '東向島', previousName: '玉ノ井', lat: 35.725104, lon: 139.819407, order: 5 },
  { date: '1924-10-01', type: 'open', stationName: '堀切', lat: 35.742921, lon: 139.817762, order: 7 },
  { date: '1924-10-01', type: 'open', stationName: '小菅', lat: 35.758675, lon: 139.812703, order: 10 },
  { date: '1924-10-01', type: 'open', stationName: '五反野', lat: 35.766093, lon: 139.809256, order: 11 },
  { date: '1924-10-01', type: 'open', stationName: '梅島', lat: 35.772384, lon: 139.798015, order: 12 },
  // 1920年 越ヶ谷（現越谷）開業、1956年越谷に改称
  { date: '1920-04-17', type: 'open', stationName: '越ヶ谷', lat: 35.888307, lon: 139.785917, order: 21 },
  { date: '1956-12-01', type: 'rename', stationName: '越谷', previousName: '越ヶ谷', lat: 35.888307, lon: 139.785917, order: 21 },
  // 1925年 谷塚、新田再開業
  { date: '1925-10-01', type: 'open', stationName: '谷塚', lat: 35.814124, lon: 139.801299, order: 15 },
  // 1926年 大袋、一ノ割開業
  { date: '1926-10-01', type: 'open', stationName: '大袋', lat: 35.924497, lon: 139.777958, order: 23 },
  { date: '1926-10-01', type: 'open', stationName: '一ノ割', lat: 35.96485, lon: 139.765893, order: 26 },
  // 1927年 姫宮開業
  { date: '1927-09-01', type: 'open', stationName: '姫宮', lat: 36.004148, lon: 139.7389, order: 29 },
  // 1931年 浅草雷門（現浅草）開業、北千住～業平橋間の新ターミナル
  { date: '1931-05-25', type: 'open', stationName: '浅草', lat: 35.710508, lon: 139.797568, order: 1 },
  // 1932年 牛田開業
  { date: '1932-09-01', type: 'open', stationName: '牛田', lat: 35.744374, lon: 139.811301, order: 8 },
  // 1962年 松原団地（獨協大学前）開業
  { date: '1962-12-01', type: 'open', stationName: '松原団地', lat: 35.843379, lon: 139.800631, order: 17 },
  { date: '2017-04-01', type: 'rename', stationName: '獨協大学前', previousName: '松原団地', lat: 35.843379, lon: 139.800631, order: 17 },
  // 1967年 せんげん台開業
  { date: '1967-04-15', type: 'open', stationName: 'せんげん台', lat: 35.935798, lon: 139.774499, order: 24 },
  // 1974年 新越谷開業
  { date: '1974-07-23', type: 'open', stationName: '新越谷', lat: 35.875553, lon: 139.789781, order: 20 },
  // 1966年 北春日部開業
  { date: '1966-09-01', type: 'open', stationName: '北春日部', lat: 35.990672, lon: 139.743991, order: 28 },
  // 2003年 押上駅開業（半蔵門線直通用）
  { date: '2003-03-19', type: 'open', stationName: '押上', lat: 35.710303, lon: 139.813327, order: 3 },
];

export const SKYTREE_MIN_DATE = '1899-08-27';
export const SKYTREE_MAX_DATE = '2025-12-31';
