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

/** 全路線の駅イベントをマージ（orderは路線ごとにオフセットして重複を回避） */
const ORDER_OFFSET = { tojo: 0, chichibu: 1000, skytree: 2000 };
const allStationEvents: StationEvent[] = [
  ...stationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.tojo })),
  ...chichibuStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.chichibu })),
  ...skytreeStationEvents.map((e) => ({ ...e, order: e.order + ORDER_OFFSET.skytree })),
];

const ALL_MIN_DATE = SKYTREE_MIN_DATE; // 1899年が最古
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
};

export type RouteId = keyof typeof ROUTES;

export const ROUTE_IDS: RouteId[] = ['all', 'tojo', 'chichibu', 'skytree'];

/** 全路線モードで各路線ごとに線を描画するためのAPI配列 */
export const INDIVIDUAL_ROUTE_APIS: StationHistoryApi[] = [tojoApi, chichibuApi, skytreeApi];
