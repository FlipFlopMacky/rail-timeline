/**
 * 秩父鉄道秩父本線の駅履歴データ
 * 羽生→三峰口の順で並び順を定義
 * 緯度経度は train.teraren.com（駅の実位置）を参照
 */
import type { StationEvent } from './types';

export const chichibuStationEvents: StationEvent[] = [
  // 1901年 熊谷～寄居間開業（上武鉄道）
  { date: '1901-10-07', type: 'open', stationName: '熊谷', lat: 36.139313, lon: 139.389542, order: 9 },
  { date: '1901-10-07', type: 'open', stationName: '田中', lat: 36.142197, lon: 139.281714, order: 15 },
  { date: '1903-06-24', type: 'rename', stationName: '武川', previousName: '田中', lat: 36.142197, lon: 139.281714, order: 15 },
  { date: '1901-10-07', type: 'open', stationName: '永田', lat: 36.135314, lon: 139.259516, order: 16 },
  { date: '1901-10-07', type: 'open', stationName: '小前田', lat: 36.12895, lon: 139.222386, order: 18 },
  { date: '1901-10-07', type: 'open', stationName: '寄居', lat: 36.117801, lon: 139.194197, order: 20 },
  // 1903年 寄居～波久礼間開業
  { date: '1903-04-02', type: 'open', stationName: '波久礼', lat: 36.126728, lon: 139.158078, order: 21 },
  // 1911年 波久礼～長瀞間開業（長瀞は宝登山駅として開業）
  { date: '1911-09-14', type: 'open', stationName: '樋口', lat: 36.131076, lon: 139.122226, order: 22 },
  { date: '1911-09-14', type: 'open', stationName: '野上', lat: 36.11157, lon: 139.110865, order: 23 },
  { date: '1911-09-14', type: 'open', stationName: '宝登山', lat: 36.095462, lon: 139.112346, order: 24 },
  { date: '1923-07-07', type: 'rename', stationName: '長瀞', previousName: '宝登山', lat: 36.095462, lon: 139.112346, order: 24 },
  // 1914年 長瀞～秩父間開業（上長瀞は国神駅として1916年開業）
  { date: '1916-01-01', type: 'open', stationName: '国神', lat: 36.086169, lon: 139.11319, order: 25 },
  { date: '1928-05-15', type: 'rename', stationName: '上長瀞', previousName: '国神', lat: 36.086169, lon: 139.11319, order: 25 },
  { date: '1914-10-27', type: 'open', stationName: '親鼻', lat: 36.077539, lon: 139.106103, order: 26 },
  { date: '1914-10-27', type: 'open', stationName: '皆野', lat: 36.068682, lon: 139.093947, order: 27 },
  { date: '1914-10-27', type: 'open', stationName: '黒谷', lat: 36.046671, lon: 139.101666, order: 28 },
  { date: '2008-04-01', type: 'rename', stationName: '和銅黒谷', previousName: '黒谷', lat: 36.046671, lon: 139.101666, order: 28 },
  { date: '1914-10-27', type: 'open', stationName: '大野原', lat: 36.018586, lon: 139.094071, order: 29 },
  { date: '1914-10-27', type: 'open', stationName: '秩父', lat: 35.99883, lon: 139.086044, order: 30 },
  // 1917年 秩父～影森～武甲間開業
  { date: '1917-08-25', type: 'open', stationName: '御花畑', lat: 35.992369, lon: 139.083614, order: 31 },
  { date: '1917-08-25', type: 'open', stationName: '影森', lat: 35.972015, lon: 139.068413, order: 32 },
  // 1922年 北武鉄道合併、羽生～熊谷間編入（行田は1966年に行田市へ改称）
  { date: '1922-09-18', type: 'open', stationName: '羽生', lat: 36.170345, lon: 139.533949, order: 1 },
  { date: '1922-09-18', type: 'open', stationName: '新郷', lat: 36.171317, lon: 139.510474, order: 3 },
  { date: '1922-09-18', type: 'open', stationName: '武州荒木', lat: 36.162614, lon: 139.488569, order: 4 },
  { date: '1922-09-18', type: 'open', stationName: '東行田', lat: 36.147265, lon: 139.468394, order: 5 },
  { date: '1922-09-18', type: 'open', stationName: '行田', lat: 36.143759, lon: 139.458851, order: 6 },
  { date: '1966-06-01', type: 'rename', stationName: '行田市', previousName: '行田', lat: 36.143759, lon: 139.458851, order: 6 },
  { date: '1922-09-18', type: 'open', stationName: '持田', lat: 36.137615, lon: 139.44155, order: 7 },
  { date: '1922-09-18', type: 'open', stationName: '石原', lat: 36.147612, lon: 139.368901, order: 11 },
  { date: '1922-09-18', type: 'open', stationName: '大麻生', lat: 36.144612, lon: 139.331859, order: 13 },
  // 1930年 影森～三峰口間開業（全線開通）
  { date: '1930-03-15', type: 'open', stationName: '浦山口', lat: 35.963922, lon: 139.058134, order: 33 },
  { date: '1930-03-15', type: 'open', stationName: '武州中川', lat: 35.958347, lon: 139.035439, order: 34 },
  { date: '1930-03-15', type: 'open', stationName: '武州日野', lat: 35.953867, lon: 139.021888, order: 35 },
  { date: '1930-03-15', type: 'open', stationName: '白久', lat: 35.95895, lon: 138.993263, order: 36 },
  { date: '1930-03-15', type: 'open', stationName: '三峰口', lat: 35.960075, lon: 138.978706, order: 37 },
  // 1933年 上熊谷（鎌倉町）開業
  { date: '1933-04-01', type: 'open', stationName: '鎌倉町', lat: 36.142657, lon: 139.38134, order: 10 },
  { date: '1933-07-01', type: 'rename', stationName: '上熊谷', previousName: '鎌倉町', lat: 36.142657, lon: 139.38134, order: 10 },
  // その後の新駅
  { date: '1981-09-01', type: 'open', stationName: '西羽生', lat: 36.17635, lon: 139.523986, order: 2 },
  { date: '1984-04-01', type: 'open', stationName: '明戸', lat: 36.142958, lon: 139.303306, order: 14 },
  { date: '1989-04-01', type: 'open', stationName: '桜沢', lat: 36.128672, lon: 139.206981, order: 19 },
  { date: '2003-03-27', type: 'open', stationName: 'ひろせ野鳥の森', lat: 36.146242, lon: 139.352086, order: 12 },
  { date: '2017-04-01', type: 'open', stationName: 'ソシオ流通センター', lat: 36.1365, lon: 139.424333, order: 8 },
  { date: '2018-10-20', type: 'open', stationName: 'ふかや花園', lat: 36.132056, lon: 139.251472, order: 17 },
];

export const CHICHIBU_MIN_DATE = '1901-10-07';
export const CHICHIBU_MAX_DATE = '2025-12-31';
