/**
 * 東武東上線の駅履歴データ
 * 池袋→寄居の順で並び順を定義
 * 緯度経度は実際の駅位置（rosenzu.net等を参照）
 */
import type { StationEvent } from './types';

export type { StationEvent };
export const stationEvents: StationEvent[] = [
  { date: '1914-05-01', type: 'open', stationName: '池袋', lat: 35.728926, lon: 139.71038, order: 1 },
  { date: '1934-05-01', type: 'open', stationName: '北池袋', lat: 35.741283, lon: 139.716749, order: 2 },
  { date: '1914-05-01', type: 'open', stationName: '下板橋', lat: 35.745682, lon: 139.71486, order: 3 },
  { date: '1931-09-27', type: 'open', stationName: '金井窪', lat: 35.7469, lon: 139.7075, order: 4 },
  { date: '1945-04-15', type: 'close', stationName: '金井窪', lat: 35.7469, lon: 139.7075, order: 4 },
  { date: '1931-08-25', type: 'open', stationName: '大山', lat: 35.748398, lon: 139.702589, order: 5 },
  { date: '1933-07-12', type: 'open', stationName: '中板橋', lat: 35.756261, lon: 139.694587, order: 6 },
  { date: '1935-10-20', type: 'open', stationName: '武蔵常盤', lat: 35.758669, lon: 139.689673, order: 7 },
  { date: '1951-10-01', type: 'rename', stationName: 'ときわ台', previousName: '武蔵常盤', lat: 35.758669, lon: 139.689673, order: 7 },
  { date: '1914-06-17', type: 'open', stationName: '上板橋', lat: 35.763512, lon: 139.676421, order: 8 },
  { date: '1931-12-29', type: 'open', stationName: '東武練馬', lat: 35.768642, lon: 139.661995, order: 9 },
  { date: '1930-12-29', type: 'open', stationName: '下赤塚', lat: 35.77053, lon: 139.644543, order: 10 },
  { date: '1914-05-01', type: 'open', stationName: '成増', lat: 35.777634, lon: 139.632888, order: 11 },
  { date: '1934-02-01', type: 'open', stationName: 'にいくら', lat: 35.788515, lon: 139.612343, order: 12 },
  { date: '1934-07-12', type: 'rename', stationName: '新倉', previousName: 'にいくら', lat: 35.788515, lon: 139.612343, order: 12 },
  { date: '1951-04-01', type: 'rename', stationName: '大和町', previousName: '新倉', lat: 35.788515, lon: 139.612343, order: 12 },
  { date: '1970-10-31', type: 'rename', stationName: '和光市', previousName: '大和町', lat: 35.788515, lon: 139.612343, order: 12 },
  { date: '1914-05-01', type: 'open', stationName: '膝折', lat: 35.797114, lon: 139.600188, order: 13 },
  { date: '1932-05-10', type: 'rename', stationName: '朝霞', previousName: '膝折', lat: 35.797114, lon: 139.600188, order: 13 },
  { date: '1974-08-06', type: 'open', stationName: '朝霞台', lat: 35.81545, lon: 139.587186, order: 14 },
  { date: '1914-05-01', type: 'open', stationName: '志木', lat: 35.82223, lon: 139.575198, order: 15 },
  { date: '1979-11-08', type: 'open', stationName: '柳瀬川', lat: 35.830673, lon: 139.562007, order: 16 },
  { date: '1977-10-21', type: 'open', stationName: 'みずほ台', lat: 35.838241, lon: 139.550847, order: 17 },
  { date: '1914-05-01', type: 'open', stationName: '鶴瀬', lat: 35.845804, lon: 139.539505, order: 18 },
  { date: '1993-11-15', type: 'open', stationName: 'ふじみ野', lat: 35.860827, lon: 139.523103, order: 19 },
  { date: '1914-05-01', type: 'open', stationName: '上福岡', lat: 35.8739, lon: 139.511696, order: 20 },
  { date: '1914-06-17', type: 'open', stationName: '高階', lat: 35.890656, lon: 139.49728, order: 21 },
  { date: '1916-10-27', type: 'rename', stationName: '新河岸', previousName: '高階', lat: 35.890656, lon: 139.49728, order: 21 },
  { date: '1915-04-01', type: 'open', stationName: '川越西町', lat: 35.906992, lon: 139.482894, order: 22 },
  { date: '1940-07-22', type: 'rename', stationName: '川越', previousName: '川越西町', lat: 35.906992, lon: 139.482894, order: 22 },
  { date: '1914-05-01', type: 'open', stationName: '川越町', lat: 35.914141, lon: 139.477372, order: 23 },
  { date: '1922-12-01', type: 'rename', stationName: '川越市', previousName: '川越町', lat: 35.914141, lon: 139.477372, order: 23 },
  { date: '1916-10-27', type: 'open', stationName: '的場', lat: 35.925627, lon: 139.443128, order: 24 },
  { date: '1930-01-14', type: 'rename', stationName: '霞ヶ関', previousName: '的場', lat: 35.925627, lon: 139.443128, order: 24 },
  { date: '1932-04-10', type: 'open', stationName: '鶴ヶ島', lat: 35.936923, lon: 139.423688, order: 25 },
  { date: '1979-04-02', type: 'open', stationName: '若葉', lat: 35.949124, lon: 139.408755, order: 26 },
  { date: '1916-10-27', type: 'open', stationName: '坂戸町', lat: 35.957339, lon: 139.393404, order: 27 },
  { date: '1976-09-01', type: 'rename', stationName: '坂戸', previousName: '坂戸町', lat: 35.957339, lon: 139.393404, order: 27 },
  { date: '1973-08-21', type: 'open', stationName: '北坂戸', lat: 35.972201, lon: 139.396812, order: 28 },
  { date: '1923-10-01', type: 'open', stationName: '高坂', lat: 36.002667, lon: 139.397647, order: 29 },
  { date: '1923-10-01', type: 'open', stationName: '武州松山', lat: 36.034849, lon: 139.40172, order: 30 },
  { date: '1954-10-01', type: 'rename', stationName: '東松山', previousName: '武州松山', lat: 36.034849, lon: 139.40172, order: 30 },
  { date: '1971-03-01', type: 'open', stationName: '森林公園', lat: 36.045239, lon: 139.374947, order: 31 },
  { date: '2002-03-26', type: 'open', stationName: 'つきのわ', lat: 36.043517, lon: 139.345427, order: 32 },
  { date: '1923-11-05', type: 'open', stationName: '菅谷', lat: 36.044375, lon: 139.327748, order: 33 },
  { date: '1935-10-01', type: 'rename', stationName: '武蔵嵐山', previousName: '菅谷', lat: 36.044375, lon: 139.327748, order: 33 },
  { date: '1925-07-10', type: 'open', stationName: '小川町', lat: 36.058902, lon: 139.26079, order: 34 },
  { date: '1925-07-10', type: 'open', stationName: '東武竹沢', lat: 36.075478, lon: 139.23776, order: 35 },
  { date: '2020-10-31', type: 'open', stationName: 'みなみ寄居', lat: 36.092417, lon: 139.2365, order: 36 },
  { date: '1925-07-10', type: 'open', stationName: '男衾', lat: 36.107429, lon: 139.234442, order: 37 },
  { date: '1925-07-10', type: 'open', stationName: '鉢形', lat: 36.113769, lon: 139.209207, order: 38 },
  { date: '1925-07-10', type: 'open', stationName: '玉淀', lat: 36.117082, lon: 139.200064, order: 39 },
  { date: '1925-07-10', type: 'open', stationName: '寄居', lat: 36.117885, lon: 139.194506, order: 40 },
];

export const MIN_DATE = '1914-05-01';
export const MAX_DATE = '2025-12-31';

export function getStationsAtDate(dateStr: string): { name: string; lat: number; lon: number; order: number }[] {
  const targetDate = new Date(dateStr).getTime();
  const stationState = new Map<string, { name: string; lat: number; lon: number; order: number }>();

  const getKey = (lat: number, lon: number) => `${lat.toFixed(5)},${lon.toFixed(5)}`;

  for (const event of stationEvents) {
    const eventDate = new Date(event.date).getTime();
    if (eventDate > targetDate) continue;

    const key = getKey(event.lat, event.lon);

    if (event.type === 'open') {
      stationState.set(key, { name: event.stationName, lat: event.lat, lon: event.lon, order: event.order });
    } else if (event.type === 'rename') {
      const existing = stationState.get(key);
      if (existing) {
        stationState.set(key, { ...existing, name: event.stationName });
      }
    } else if (event.type === 'close') {
      stationState.delete(key);
    }
  }

  return Array.from(stationState.values()).sort((a, b) => a.order - b.order);
}

/** 指定座標の駅が初めて開業した日付（openイベントの日付） */
export function getStationOpenDate(lat: number, lon: number): string | null {
  const getKey = (la: number, lo: number) => `${la.toFixed(5)},${lo.toFixed(5)}`;
  const key = getKey(lat, lon);
  const openEvent = stationEvents.find(
    (e) => e.type === 'open' && getKey(e.lat, e.lon) === key
  );
  return openEvent?.date ?? null;
}

/** 指定座標・日付でその日に改称が行われた場合のイベント */
export function getRenameEventOnDate(
  lat: number,
  lon: number,
  dateStr: string
): { previousName: string; newName: string } | null {
  const getKey = (la: number, lo: number) => `${la.toFixed(5)},${lo.toFixed(5)}`;
  const key = getKey(lat, lon);
  const event = stationEvents.find(
    (e) =>
      e.type === 'rename' &&
      getKey(e.lat, e.lon) === key &&
      e.date === dateStr
  );
  return event ? { previousName: event.previousName ?? '', newName: event.stationName } : null;
}

/** 指定日に起きたイベント一覧（開業・改称・廃止） */
export function getEventsOnDate(dateStr: string): StationEvent[] {
  return stationEvents.filter((e) => e.date === dateStr);
}

/** 指定日時点での直近のイベント（その日以前で最も新しい）と次のイベント */
export function getNearestEvents(dateStr: string): {
  last: StationEvent | null;
  next: StationEvent | null;
} {
  const targetTime = new Date(dateStr).getTime();
  const sorted = [...stationEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  let last: StationEvent | null = null;
  let next: StationEvent | null = null;
  for (const e of sorted) {
    const t = new Date(e.date).getTime();
    if (t <= targetTime) last = e;
    else if (t > targetTime && !next) {
      next = e;
      break;
    }
  }
  return { last, next };
}

/** 指定座標の駅の全履歴（開業・改称・廃止を時系列で） */
export function getStationFullHistory(
  lat: number,
  lon: number
): { date: string; type: 'open' | 'rename' | 'close'; label: string }[] {
  const getKey = (la: number, lo: number) => `${la.toFixed(5)},${lo.toFixed(5)}`;
  const key = getKey(lat, lon);
  const events = stationEvents
    .filter((e) => getKey(e.lat, e.lon) === key)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((e) => {
      if (e.type === 'open') return { date: e.date, type: e.type as 'open', label: `${e.stationName} として開業` };
      if (e.type === 'rename') return { date: e.date, type: e.type as 'rename', label: `${e.previousName} → ${e.stationName} に改称` };
      if (e.type === 'close') return { date: e.date, type: e.type as 'close', label: `${e.stationName} 廃止` };
      return { date: e.date, type: e.type, label: e.stationName };
    });
  return events;
}

/** 指定座標・日付時点での改称履歴（古い順） */
export function getRenameHistoryForPosition(
  lat: number,
  lon: number,
  dateStr: string
): { date: string; previousName: string; newName: string }[] {
  const targetDate = new Date(dateStr).getTime();
  const getKey = (la: number, lo: number) => `${la.toFixed(5)},${lo.toFixed(5)}`;
  const key = getKey(lat, lon);

  return stationEvents
    .filter(
      (e) =>
        e.type === 'rename' &&
        getKey(e.lat, e.lon) === key &&
        new Date(e.date).getTime() <= targetDate
    )
    .map((e) => ({
      date: e.date,
      previousName: e.previousName ?? '',
      newName: e.stationName,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
