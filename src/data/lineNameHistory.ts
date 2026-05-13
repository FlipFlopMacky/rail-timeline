/**
 * 各路線の「路線名・旅客案内上の愛称」の変遷（駅の改称とは別）
 * 日付・文言は Wikipedia 各路線記事および data/README の沿革に基づく（要検証の年はコメントで補足）
 *
 * `LINE_OPENING_BY_ROUTE_ID` … 駅データの MIN_DATE（当路線のデータ上の開業日）に
 * 「この日に起きたこと」へ出す開業時の路線名。同日に `LINE_NAME_EVENTS` の項目がある路線は自動で省略（重複防止）。
 */
import type { LineNameEvent } from './types';

const LINE_NAME_EVENTS_BY_ROUTE_ID: Record<string, LineNameEvent[]> = {
  skytree: [
    {
      date: '2012-03-17',
      previousLineName: '東武伊勢崎線（浅草～東武動物公園・旅客案内上の愛称なし）',
      newLineName: '東武スカイツリーライン（同区間の愛称）',
    },
  ],
  tobuNoda: [
    {
      date: '2005-08-24',
      previousLineName: '東武野田線（愛称なし）',
      newLineName: '東武野田線「アーバンパークライン」（愛称）',
    },
  ],
  seibuShinjuku: [
    {
      date: '1952-03-25',
      previousLineName: '村山線（高田馬場～東村山）ほか川越側区間との整理前',
      newLineName: '西武新宿線（西武新宿開業・全線の一体案内）',
    },
  ],
  seibuKokubunji: [
    {
      date: '1927-04-16',
      previousLineName: '川越鉄道区間（国分寺～東村山・のち支線化）',
      newLineName: '村山線の支線区間として整理（現・国分寺線の母体）',
    },
  ],
  musashino: [
    {
      date: '1973-04-01',
      previousLineName: '貨物線位の整備（旅客案内上の「武蔵野線」以前）',
      newLineName: 'JR武蔵野線（府中本町～新松戸 旅客開業）',
    },
  ],
  jrSaikyo: [
    {
      date: '1985-09-30',
      previousLineName: '山手貨物線等の線位（「埼京線」旅客案内なし）',
      newLineName: 'JR埼京線（池袋～大宮 旅客運転開始）',
    },
  ],
};

/** 駅履歴の最古日（開業日）に表示する「開業時の路線名」（手動の路線名イベントと同日なら合成しない） */
const LINE_OPENING_BY_ROUTE_ID: Record<string, { previousLineName: string; newLineName: string }> = {
  tojo: {
    previousLineName: '（未開業）',
    newLineName: '東武東上線（開業・東武鉄道 池袋起点）',
  },
  chichibu: {
    previousLineName: '（未開業）',
    newLineName: '上武鉄道（熊谷～寄居）※現・秩父本線の起点区間',
  },
  skytree: {
    previousLineName: '（未開業）',
    newLineName: '東武伊勢崎線（開業・北千住～久喜）',
  },
  seibuIkebukuro: {
    previousLineName: '（未開業）',
    newLineName: '武蔵野鉄道（池袋～飯能開業）※現・西武池袋線の母体',
  },
  seibuChichibu: {
    previousLineName: '（未開業）',
    newLineName: '西武秩父線（吾野～西武秩父 全線開業）',
  },
  seibuShinjuku: {
    previousLineName: '（未開業）',
    newLineName: '川越鉄道（所沢～川越など）※現・新宿線区間の起点',
  },
  seibuKokubunji: {
    previousLineName: '（未開業）',
    newLineName: '川越鉄道（国分寺～久米川仮開業など）',
  },
  seibuSayama: {
    previousLineName: '（未開業）',
    newLineName: '武蔵野鉄道・狭山線（西所沢～村山公園［現・西武球場前の母体］開業）',
  },
  tobuNoda: {
    previousLineName: '（未開業）',
    newLineName: '千葉県営鉄道（野田町～）※東武野田線の母体',
  },
  tobuOgose: {
    previousLineName: '（未開業）',
    newLineName: '東武越生線（坂戸～越生 全線旅客開業）',
  },
  jrKawagoe: {
    previousLineName: '（未開業）',
    newLineName: '川越線（開業・大宮～高麗川の系統）',
  },
  jrTohokuMain: {
    previousLineName: '（未開業）',
    newLineName: '東北本線（日本鉄道・開業時の案内に相当）',
  },
};

export function buildLineNameEventsForRoute(routeId: string, stationMin: string): LineNameEvent[] {
  const manual = LINE_NAME_EVENTS_BY_ROUTE_ID[routeId] ?? [];
  const opening = LINE_OPENING_BY_ROUTE_ID[routeId];
  if (!opening) {
    return [...manual].sort((a, b) => a.date.localeCompare(b.date));
  }
  const hasLineEventOnStationMin = manual.some((e) => e.date === stationMin);
  const merged = hasLineEventOnStationMin
    ? [...manual]
    : [{ date: stationMin, previousLineName: opening.previousLineName, newLineName: opening.newLineName }, ...manual];
  return merged.sort((a, b) => a.date.localeCompare(b.date));
}

/** 手動登録のみ（合成開業を含まない） */
export function getLineNameEventsForRoute(routeId: string): LineNameEvent[] {
  return LINE_NAME_EVENTS_BY_ROUTE_ID[routeId] ?? [];
}
