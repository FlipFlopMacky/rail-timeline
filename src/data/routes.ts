/**
 * 路線一覧とルーティング
 */
import type { LineNameEvent, RouteData, StationHistoryApi, StationEvent } from './types';
import { createStationHistoryApi } from './routeUtils';
import { buildLineNameEventsForRoute } from './lineNameHistory';
import { stationEvents, MIN_DATE, MAX_DATE } from './stationHistory';
import {
  chichibuStationEvents,
  CHICHIBU_MIN_DATE,
  CHICHIBU_MAX_DATE,
} from './chichibuStationHistory';
import {
  skytreeStationEvents,
  SKYTREE_MIN_DATE,
  SKYTREE_MAX_DATE,
} from './skytreeStationHistory';
import {
  musashinoStationEvents,
  MUSASHINO_MIN_DATE,
  MUSASHINO_MAX_DATE,
} from './musashinoStationHistory';
import {
  seibuIkebukuroStationEvents,
  SEIBU_IKEBUKURO_MIN_DATE,
  SEIBU_IKEBUKURO_MAX_DATE,
} from './seibuIkebukuroStationHistory';
import {
  seibuChichibuStationEvents,
  SEIBU_CHICHIBU_MIN_DATE,
  SEIBU_CHICHIBU_MAX_DATE,
} from './seibuChichibuStationHistory';
import {
  seibuShinjukuStationEvents,
  SEIBU_SHINJUKU_MIN_DATE,
  SEIBU_SHINJUKU_MAX_DATE,
} from './seibuShinjukuStationHistory';
import {
  seibuKokubunjiStationEvents,
  SEIBU_KOKUBUNJI_MIN_DATE,
  SEIBU_KOKUBUNJI_MAX_DATE,
} from './seibuKokubunjiStationHistory';
import {
  seibuSayamaStationEvents,
  SEIBU_SAYAMA_MIN_DATE,
  SEIBU_SAYAMA_MAX_DATE,
} from './seibuSayamaStationHistory';
import {
  tobuNodaStationEvents,
  TOBU_NODA_MIN_DATE,
  TOBU_NODA_MAX_DATE,
} from './tobuNodaStationHistory';
import {
  tobuOgoseStationEvents,
  TOBU_OGOSE_MIN_DATE,
  TOBU_OGOSE_MAX_DATE,
} from './tobuOgoseStationHistory';
import {
  jrKawagoeStationEvents,
  JR_KAWAGOE_MIN_DATE,
  JR_KAWAGOE_MAX_DATE,
} from './jrKawagoeStationHistory';
import {
  jrSaikyoStationEvents,
  JR_SAIKYO_MIN_DATE,
  JR_SAIKYO_MAX_DATE,
} from './jrSaikyoStationHistory';
import {
  jrTohokuMainStationEvents,
  JR_TOHOKU_MAIN_MIN_DATE,
  JR_TOHOKU_MAIN_MAX_DATE,
} from './jrTohokuMainStationHistory';

/** 全路線の駅イベントをマージ（orderは路線ごとにオフセットして重複を回避） */
const ORDER_OFFSET = {
  tojo: 0,
  chichibu: 1000,
  skytree: 2000,
  musashino: 3000,
  seibuIkebukuro: 4000,
  seibuChichibu: 5000,
  seibuShinjuku: 6000,
  seibuKokubunji: 7000,
  seibuSayama: 13000,
  tobuNoda: 8000,
  tobuOgose: 12000,
  jrKawagoe: 9000,
  jrSaikyo: 10000,
  jrTohokuMain: 11000,
};
const allStationEvents: StationEvent[] = [
  ...stationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.tojo })),
  ...chichibuStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.chichibu })),
  ...skytreeStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.skytree })),
  ...musashinoStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.musashino })),
  ...seibuIkebukuroStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.seibuIkebukuro })),
  ...seibuChichibuStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.seibuChichibu })),
  ...seibuShinjukuStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.seibuShinjuku })),
  ...seibuKokubunjiStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.seibuKokubunji })),
  ...seibuSayamaStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.seibuSayama })),
  ...tobuNodaStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.tobuNoda })),
  ...tobuOgoseStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.tobuOgose })),
  ...jrKawagoeStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.jrKawagoe })),
  ...jrSaikyoStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.jrSaikyo })),
  ...jrTohokuMainStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.jrTohokuMain })),
];

/** 登録路線のうち最も古い開始日（ISO 日付文字列同士の比較） */
const ALL_MIN_DATE = [
  MIN_DATE,
  CHICHIBU_MIN_DATE,
  SKYTREE_MIN_DATE,
  MUSASHINO_MIN_DATE,
  SEIBU_IKEBUKURO_MIN_DATE,
  SEIBU_CHICHIBU_MIN_DATE,
  SEIBU_SHINJUKU_MIN_DATE,
  SEIBU_KOKUBUNJI_MIN_DATE,
  SEIBU_SAYAMA_MIN_DATE,
  TOBU_NODA_MIN_DATE,
  TOBU_OGOSE_MIN_DATE,
  JR_KAWAGOE_MIN_DATE,
  JR_SAIKYO_MIN_DATE,
  JR_TOHOKU_MAIN_MIN_DATE,
].reduce((earliest, d) => (d < earliest ? d : earliest));
const ALL_MAX_DATE = [
  MAX_DATE,
  CHICHIBU_MAX_DATE,
  SKYTREE_MAX_DATE,
  MUSASHINO_MAX_DATE,
  SEIBU_IKEBUKURO_MAX_DATE,
  SEIBU_CHICHIBU_MAX_DATE,
  SEIBU_SHINJUKU_MAX_DATE,
  SEIBU_KOKUBUNJI_MAX_DATE,
  SEIBU_SAYAMA_MAX_DATE,
  TOBU_NODA_MAX_DATE,
  TOBU_OGOSE_MAX_DATE,
  JR_KAWAGOE_MAX_DATE,
  JR_SAIKYO_MAX_DATE,
  JR_TOHOKU_MAIN_MAX_DATE,
].reduce((latest, d) => (d > latest ? d : latest));

function mergeRouteDateBounds(stationMin: string, stationMax: string, lineEvents: LineNameEvent[]) {
  const dates = [stationMin, stationMax, ...lineEvents.map((e) => e.date)];
  return {
    min: dates.reduce((a, b) => (a < b ? a : b)),
    max: dates.reduce((a, b) => (a > b ? a : b)),
  };
}

function createTimedRouteApi(
  routeId: string,
  events: StationEvent[],
  stationMin: string,
  stationMax: string
): StationHistoryApi {
  const lineNameEvents = buildLineNameEventsForRoute(routeId, stationMin);
  const { min, max } = mergeRouteDateBounds(stationMin, stationMax, lineNameEvents);
  return createStationHistoryApi(events, min, max, lineNameEvents);
}

const tojoApi = createTimedRouteApi('tojo', stationEvents, MIN_DATE, MAX_DATE);
const chichibuApi = createTimedRouteApi('chichibu', chichibuStationEvents, CHICHIBU_MIN_DATE, CHICHIBU_MAX_DATE);
const skytreeApi = createTimedRouteApi('skytree', skytreeStationEvents, SKYTREE_MIN_DATE, SKYTREE_MAX_DATE);
const musashinoApi = createTimedRouteApi('musashino', musashinoStationEvents, MUSASHINO_MIN_DATE, MUSASHINO_MAX_DATE);
const seibuIkebukuroApi = createTimedRouteApi(
  'seibuIkebukuro',
  seibuIkebukuroStationEvents,
  SEIBU_IKEBUKURO_MIN_DATE,
  SEIBU_IKEBUKURO_MAX_DATE
);
const seibuChichibuApi = createTimedRouteApi(
  'seibuChichibu',
  seibuChichibuStationEvents,
  SEIBU_CHICHIBU_MIN_DATE,
  SEIBU_CHICHIBU_MAX_DATE
);
const seibuShinjukuApi = createTimedRouteApi(
  'seibuShinjuku',
  seibuShinjukuStationEvents,
  SEIBU_SHINJUKU_MIN_DATE,
  SEIBU_SHINJUKU_MAX_DATE
);
const seibuKokubunjiApi = createTimedRouteApi(
  'seibuKokubunji',
  seibuKokubunjiStationEvents,
  SEIBU_KOKUBUNJI_MIN_DATE,
  SEIBU_KOKUBUNJI_MAX_DATE
);
const seibuSayamaApi = createTimedRouteApi(
  'seibuSayama',
  seibuSayamaStationEvents,
  SEIBU_SAYAMA_MIN_DATE,
  SEIBU_SAYAMA_MAX_DATE
);
const tobuNodaApi = createTimedRouteApi('tobuNoda', tobuNodaStationEvents, TOBU_NODA_MIN_DATE, TOBU_NODA_MAX_DATE);
const tobuOgoseApi = createTimedRouteApi('tobuOgose', tobuOgoseStationEvents, TOBU_OGOSE_MIN_DATE, TOBU_OGOSE_MAX_DATE);
const jrKawagoeApi = createTimedRouteApi('jrKawagoe', jrKawagoeStationEvents, JR_KAWAGOE_MIN_DATE, JR_KAWAGOE_MAX_DATE);
const jrSaikyoApi = createTimedRouteApi('jrSaikyo', jrSaikyoStationEvents, JR_SAIKYO_MIN_DATE, JR_SAIKYO_MAX_DATE);
const jrTohokuMainApi = createTimedRouteApi(
  'jrTohokuMain',
  jrTohokuMainStationEvents,
  JR_TOHOKU_MAIN_MIN_DATE,
  JR_TOHOKU_MAIN_MAX_DATE
);
const allApi: StationHistoryApi = createStationHistoryApi(allStationEvents, ALL_MIN_DATE, ALL_MAX_DATE, []);

export const ROUTES: Record<string, { data: RouteData; api: StationHistoryApi }> = {
  all: {
    data: {
      id: 'all',
      name: '全路線',
      stationEvents: allStationEvents,
      lineNameEvents: [],
      minDate: ALL_MIN_DATE,
      maxDate: ALL_MAX_DATE,
    },
    api: allApi,
  },
  tojo: {
    data: {
      id: 'tojo',
      name: '東武東上線（池袋～寄居）',
      stationEvents,
      lineNameEvents: buildLineNameEventsForRoute('tojo', MIN_DATE),
      minDate: tojoApi.MIN_DATE,
      maxDate: tojoApi.MAX_DATE,
    },
    api: tojoApi,
  },
  chichibu: {
    data: {
      id: 'chichibu',
      name: '秩父鉄道秩父本線（羽生～三峰口）',
      stationEvents: chichibuStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('chichibu', CHICHIBU_MIN_DATE),
      minDate: chichibuApi.MIN_DATE,
      maxDate: chichibuApi.MAX_DATE,
    },
    api: chichibuApi,
  },
  skytree: {
    data: {
      id: 'skytree',
      name: '東武スカイツリーライン（浅草～東武動物公園）',
      stationEvents: skytreeStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('skytree', SKYTREE_MIN_DATE),
      minDate: skytreeApi.MIN_DATE,
      maxDate: skytreeApi.MAX_DATE,
    },
    api: skytreeApi,
  },
  musashino: {
    data: {
      id: 'musashino',
      name: 'JR武蔵野線（府中本町～西船橋）',
      stationEvents: musashinoStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('musashino', MUSASHINO_MIN_DATE),
      minDate: musashinoApi.MIN_DATE,
      maxDate: musashinoApi.MAX_DATE,
    },
    api: musashinoApi,
  },
  seibuIkebukuro: {
    data: {
      id: 'seibuIkebukuro',
      name: '西武池袋線（池袋～吾野）',
      stationEvents: seibuIkebukuroStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('seibuIkebukuro', SEIBU_IKEBUKURO_MIN_DATE),
      minDate: seibuIkebukuroApi.MIN_DATE,
      maxDate: seibuIkebukuroApi.MAX_DATE,
    },
    api: seibuIkebukuroApi,
  },
  seibuChichibu: {
    data: {
      id: 'seibuChichibu',
      name: '西武秩父線（吾野～西武秩父）',
      stationEvents: seibuChichibuStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('seibuChichibu', SEIBU_CHICHIBU_MIN_DATE),
      minDate: seibuChichibuApi.MIN_DATE,
      maxDate: seibuChichibuApi.MAX_DATE,
    },
    api: seibuChichibuApi,
  },
  seibuShinjuku: {
    data: {
      id: 'seibuShinjuku',
      name: '西武新宿線（西武新宿～本川越）',
      stationEvents: seibuShinjukuStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('seibuShinjuku', SEIBU_SHINJUKU_MIN_DATE),
      minDate: seibuShinjukuApi.MIN_DATE,
      maxDate: seibuShinjukuApi.MAX_DATE,
    },
    api: seibuShinjukuApi,
  },
  seibuKokubunji: {
    data: {
      id: 'seibuKokubunji',
      name: '西武国分寺線（国分寺～東村山）',
      stationEvents: seibuKokubunjiStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('seibuKokubunji', SEIBU_KOKUBUNJI_MIN_DATE),
      minDate: seibuKokubunjiApi.MIN_DATE,
      maxDate: seibuKokubunjiApi.MAX_DATE,
    },
    api: seibuKokubunjiApi,
  },
  seibuSayama: {
    data: {
      id: 'seibuSayama',
      name: '西武狭山線（西所沢～西武球場前）',
      stationEvents: seibuSayamaStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('seibuSayama', SEIBU_SAYAMA_MIN_DATE),
      minDate: seibuSayamaApi.MIN_DATE,
      maxDate: seibuSayamaApi.MAX_DATE,
    },
    api: seibuSayamaApi,
  },
  tobuNoda: {
    data: {
      id: 'tobuNoda',
      name: '東武野田線・アーバンパークライン（大宮～船橋）',
      stationEvents: tobuNodaStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('tobuNoda', TOBU_NODA_MIN_DATE),
      minDate: tobuNodaApi.MIN_DATE,
      maxDate: tobuNodaApi.MAX_DATE,
    },
    api: tobuNodaApi,
  },
  tobuOgose: {
    data: {
      id: 'tobuOgose',
      name: '東武越生線（坂戸～越生）',
      stationEvents: tobuOgoseStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('tobuOgose', TOBU_OGOSE_MIN_DATE),
      minDate: tobuOgoseApi.MIN_DATE,
      maxDate: tobuOgoseApi.MAX_DATE,
    },
    api: tobuOgoseApi,
  },
  jrKawagoe: {
    data: {
      id: 'jrKawagoe',
      name: 'JR川越線（大宮～高麗川）',
      stationEvents: jrKawagoeStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('jrKawagoe', JR_KAWAGOE_MIN_DATE),
      minDate: jrKawagoeApi.MIN_DATE,
      maxDate: jrKawagoeApi.MAX_DATE,
    },
    api: jrKawagoeApi,
  },
  jrSaikyo: {
    data: {
      id: 'jrSaikyo',
      name: 'JR埼京線（大崎～大宮）',
      stationEvents: jrSaikyoStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('jrSaikyo', JR_SAIKYO_MIN_DATE),
      minDate: jrSaikyoApi.MIN_DATE,
      maxDate: jrSaikyoApi.MAX_DATE,
    },
    api: jrSaikyoApi,
  },
  jrTohokuMain: {
    data: {
      id: 'jrTohokuMain',
      name: 'JR東北本線（東京～黒磯）',
      stationEvents: jrTohokuMainStationEvents,
      lineNameEvents: buildLineNameEventsForRoute('jrTohokuMain', JR_TOHOKU_MAIN_MIN_DATE),
      minDate: jrTohokuMainApi.MIN_DATE,
      maxDate: jrTohokuMainApi.MAX_DATE,
    },
    api: jrTohokuMainApi,
  },
};

export type RouteId = keyof typeof ROUTES;

/**
 * 路線セレクト・全路線モードのポリライン順（`all` を除く）。
 * 東武 → 西武（路線名五十音）→ JR（五十音）→ 秩父鉄道
 */
export const ROUTE_DROPDOWN_ORDER: Exclude<RouteId, 'all'>[] = [
  'tojo',
  'skytree',
  'tobuNoda',
  'tobuOgose',
  'seibuIkebukuro',
  'seibuKokubunji',
  'seibuSayama',
  'seibuShinjuku',
  'seibuChichibu',
  'jrKawagoe',
  'jrSaikyo',
  'jrTohokuMain',
  'musashino',
  'chichibu',
];

/** 地図のポリライン・駅ドット用（各路線の案内色・イメージに近い色） */
export const ROUTE_LINE_COLORS: Record<Exclude<RouteId, 'all'>, string> = {
  tojo: '#ED6C00',
  chichibu: '#9A5C3F',
  skytree: '#E60012',
  musashino: '#EC6800',
  seibuIkebukuro: '#0068B7',
  seibuChichibu: '#E8B500',
  seibuShinjuku: '#00A9E0',
  seibuKokubunji: '#E7578A',
  seibuSayama: '#E85298',
  tobuNoda: '#00A857',
  tobuOgose: '#C45C1A',
  jrKawagoe: '#7AC940',
  jrSaikyo: '#5CB531',
  jrTohokuMain: '#F68B1F',
};

export const ROUTE_IDS: RouteId[] = ['all', ...ROUTE_DROPDOWN_ORDER];

/** `INDIVIDUAL_ROUTE_APIS` と同じ並びの線色（全路線モードのポリライン用） */
export const INDIVIDUAL_ROUTE_LINE_COLORS: string[] = ROUTE_DROPDOWN_ORDER.map((id) => ROUTE_LINE_COLORS[id]);

/** 全路線モードで各路線ごとに線を描画するためのAPI配列 */
export const INDIVIDUAL_ROUTE_APIS: StationHistoryApi[] = ROUTE_DROPDOWN_ORDER.map((id) => ROUTES[id].api);
