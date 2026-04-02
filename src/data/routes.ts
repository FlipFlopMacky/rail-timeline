/**
 * 路線一覧とルーティング
 */
import type { RouteData, StationHistoryApi, StationEvent } from './types';
import { createStationHistoryApi } from './routeUtils';
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
  tobuNodaStationEvents,
  TOBU_NODA_MIN_DATE,
  TOBU_NODA_MAX_DATE,
} from './tobuNodaStationHistory';

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
  tobuNoda: 8000,
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
  ...tobuNodaStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.tobuNoda })),
];

const ALL_MIN_DATE = SEIBU_KOKUBUNJI_MIN_DATE;
const ALL_MAX_DATE = '2025-12-31';

const tojoApi: StationHistoryApi = createStationHistoryApi(stationEvents, MIN_DATE, MAX_DATE);
const chichibuApi: StationHistoryApi = createStationHistoryApi(
  chichibuStationEvents,
  CHICHIBU_MIN_DATE,
  CHICHIBU_MAX_DATE
);
const skytreeApi: StationHistoryApi = createStationHistoryApi(
  skytreeStationEvents,
  SKYTREE_MIN_DATE,
  SKYTREE_MAX_DATE
);
const musashinoApi: StationHistoryApi = createStationHistoryApi(
  musashinoStationEvents,
  MUSASHINO_MIN_DATE,
  MUSASHINO_MAX_DATE
);
const seibuIkebukuroApi: StationHistoryApi = createStationHistoryApi(
  seibuIkebukuroStationEvents,
  SEIBU_IKEBUKURO_MIN_DATE,
  SEIBU_IKEBUKURO_MAX_DATE
);
const seibuChichibuApi: StationHistoryApi = createStationHistoryApi(
  seibuChichibuStationEvents,
  SEIBU_CHICHIBU_MIN_DATE,
  SEIBU_CHICHIBU_MAX_DATE
);
const seibuShinjukuApi: StationHistoryApi = createStationHistoryApi(
  seibuShinjukuStationEvents,
  SEIBU_SHINJUKU_MIN_DATE,
  SEIBU_SHINJUKU_MAX_DATE
);
const seibuKokubunjiApi: StationHistoryApi = createStationHistoryApi(
  seibuKokubunjiStationEvents,
  SEIBU_KOKUBUNJI_MIN_DATE,
  SEIBU_KOKUBUNJI_MAX_DATE
);
const tobuNodaApi: StationHistoryApi = createStationHistoryApi(
  tobuNodaStationEvents,
  TOBU_NODA_MIN_DATE,
  TOBU_NODA_MAX_DATE
);
const allApi: StationHistoryApi = createStationHistoryApi(allStationEvents, ALL_MIN_DATE, ALL_MAX_DATE);

export const ROUTES: Record<string, { data: RouteData; api: StationHistoryApi }> = {
  all: {
    data: {
      id: 'all',
      name: '全路線',
      stationEvents: allStationEvents,
      minDate: ALL_MIN_DATE,
      maxDate: ALL_MAX_DATE,
    },
    api: allApi,
  },
  tojo: {
    data: {
      id: 'tojo',
      name: '東武東上線',
      stationEvents,
      minDate: MIN_DATE,
      maxDate: MAX_DATE,
    },
    api: tojoApi,
  },
  chichibu: {
    data: {
      id: 'chichibu',
      name: '秩父鉄道秩父本線',
      stationEvents: chichibuStationEvents,
      minDate: CHICHIBU_MIN_DATE,
      maxDate: CHICHIBU_MAX_DATE,
    },
    api: chichibuApi,
  },
  skytree: {
    data: {
      id: 'skytree',
      name: '東武スカイツリーライン',
      stationEvents: skytreeStationEvents,
      minDate: SKYTREE_MIN_DATE,
      maxDate: SKYTREE_MAX_DATE,
    },
    api: skytreeApi,
  },
  musashino: {
    data: {
      id: 'musashino',
      name: 'JR武蔵野線（府中本町～西船橋）',
      stationEvents: musashinoStationEvents,
      minDate: MUSASHINO_MIN_DATE,
      maxDate: MUSASHINO_MAX_DATE,
    },
    api: musashinoApi,
  },
  seibuIkebukuro: {
    data: {
      id: 'seibuIkebukuro',
      name: '西武池袋線（池袋～吾野）',
      stationEvents: seibuIkebukuroStationEvents,
      minDate: SEIBU_IKEBUKURO_MIN_DATE,
      maxDate: SEIBU_IKEBUKURO_MAX_DATE,
    },
    api: seibuIkebukuroApi,
  },
  seibuChichibu: {
    data: {
      id: 'seibuChichibu',
      name: '西武秩父線（吾野～西武秩父）',
      stationEvents: seibuChichibuStationEvents,
      minDate: SEIBU_CHICHIBU_MIN_DATE,
      maxDate: SEIBU_CHICHIBU_MAX_DATE,
    },
    api: seibuChichibuApi,
  },
  seibuShinjuku: {
    data: {
      id: 'seibuShinjuku',
      name: '西武新宿線（西武新宿～本川越）',
      stationEvents: seibuShinjukuStationEvents,
      minDate: SEIBU_SHINJUKU_MIN_DATE,
      maxDate: SEIBU_SHINJUKU_MAX_DATE,
    },
    api: seibuShinjukuApi,
  },
  seibuKokubunji: {
    data: {
      id: 'seibuKokubunji',
      name: '西武国分寺線（国分寺～東村山）',
      stationEvents: seibuKokubunjiStationEvents,
      minDate: SEIBU_KOKUBUNJI_MIN_DATE,
      maxDate: SEIBU_KOKUBUNJI_MAX_DATE,
    },
    api: seibuKokubunjiApi,
  },
  tobuNoda: {
    data: {
      id: 'tobuNoda',
      name: '東武野田線（大宮～船橋）',
      stationEvents: tobuNodaStationEvents,
      minDate: TOBU_NODA_MIN_DATE,
      maxDate: TOBU_NODA_MAX_DATE,
    },
    api: tobuNodaApi,
  },
};

export type RouteId = keyof typeof ROUTES;

export const ROUTE_IDS: RouteId[] = [
  'all',
  'tojo',
  'chichibu',
  'skytree',
  'musashino',
  'seibuIkebukuro',
  'seibuChichibu',
  'seibuShinjuku',
  'seibuKokubunji',
  'tobuNoda',
];

/** 全路線モードで各路線ごとに線を描画するためのAPI配列 */
export const INDIVIDUAL_ROUTE_APIS: StationHistoryApi[] = [
  tojoApi,
  chichibuApi,
  skytreeApi,
  musashinoApi,
  seibuIkebukuroApi,
  seibuChichibuApi,
  seibuShinjukuApi,
  seibuKokubunjiApi,
  tobuNodaApi,
];
