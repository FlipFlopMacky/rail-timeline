/**
 * 路線一覧とルーティング
 */
import type { RouteData, StationHistoryApi } from './types';
import { createStationHistoryApi } from './routeUtils';
import { stationEvents, MIN_DATE, MAX_DATE } from './stationHistory';
import {
  chichibuStationEvents,
  CHICHIBU_MIN_DATE,
  CHICHIBU_MAX_DATE,
} from './chichibuStationHistory';

const tojoApi: StationHistoryApi = createStationHistoryApi(stationEvents, MIN_DATE, MAX_DATE);
const chichibuApi: StationHistoryApi = createStationHistoryApi(
  chichibuStationEvents,
  CHICHIBU_MIN_DATE,
  CHICHIBU_MAX_DATE
);

export const ROUTES: Record<string, { data: RouteData; api: StationHistoryApi }> = {
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
};

export type RouteId = keyof typeof ROUTES;

export const ROUTE_IDS: RouteId[] = ['tojo', 'chichibu'];
