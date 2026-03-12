/**
 * 駅履歴データからAPIを生成する共通ユーティリティ
 */
import type { StationEvent, StationHistoryApi } from './types';

export function createStationHistoryApi(
  stationEvents: StationEvent[],
  minDate: string,
  maxDate: string
): StationHistoryApi {
  const getKey = (lat: number, lon: number) => `${lat.toFixed(5)},${lon.toFixed(5)}`;

  function getStationsAtDate(dateStr: string): { name: string; lat: number; lon: number; order: number }[] {
    const targetDate = new Date(dateStr).getTime();
    const stationState = new Map<string, { name: string; lat: number; lon: number; order: number }>();

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

  function getStationOpenDate(lat: number, lon: number): string | null {
    const key = getKey(lat, lon);
    const openEvent = stationEvents.find((e) => e.type === 'open' && getKey(e.lat, e.lon) === key);
    return openEvent?.date ?? null;
  }

  function getRenameEventOnDate(
    lat: number,
    lon: number,
    dateStr: string
  ): { previousName: string; newName: string } | null {
    const key = getKey(lat, lon);
    const event = stationEvents.find(
      (e) => e.type === 'rename' && getKey(e.lat, e.lon) === key && e.date === dateStr
    );
    return event ? { previousName: event.previousName ?? '', newName: event.stationName } : null;
  }

  function getEventsOnDate(dateStr: string): StationEvent[] {
    return stationEvents.filter((e) => e.date === dateStr);
  }

  function getNearestEvents(dateStr: string): { last: StationEvent | null; next: StationEvent | null } {
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

  function getStationFullHistory(
    lat: number,
    lon: number
  ): { date: string; type: 'open' | 'rename' | 'close'; label: string }[] {
    const key = getKey(lat, lon);
    return stationEvents
      .filter((e) => getKey(e.lat, e.lon) === key)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((e) => {
        if (e.type === 'open') return { date: e.date, type: e.type as 'open', label: `${e.stationName} として開業` };
        if (e.type === 'rename')
          return { date: e.date, type: e.type as 'rename', label: `${e.previousName} → ${e.stationName} に改称` };
        if (e.type === 'close') return { date: e.date, type: e.type as 'close', label: `${e.stationName} 廃止` };
        return { date: e.date, type: e.type, label: e.stationName };
      });
  }

  return {
    getStationsAtDate,
    getStationOpenDate,
    getRenameEventOnDate,
    getStationFullHistory,
    getEventsOnDate,
    getNearestEvents,
    stationEvents,
    MIN_DATE: minDate,
    MAX_DATE: maxDate,
  };
}
