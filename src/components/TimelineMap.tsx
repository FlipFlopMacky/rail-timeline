import { useState, useCallback, useEffect, useMemo, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { StationHistoryApi, TimelineEvent } from '../data/types';
import { ROUTE_DROPDOWN_ORDER, type RouteId } from '../data/routes';
import { getJapaneseHistoryForYear } from '../data/japaneseHistory';
import { getStationExternalLinks } from '../data/stationExternalLinks';

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createStationIcon(
  stationName: string,
  isJustBorn: boolean,
  renameOnDate: { previousName: string; newName: string } | null,
  dotColor: string
): L.DivIcon {
  const popClass = isJustBorn ? ' station-pop-in' : '';
  const renameClass = renameOnDate ? ' station-just-renamed' : '';

  let labelHtml: string;
  if (renameOnDate) {
    labelHtml = `
      <span class="station-label station-rename-label">
        <span class="old-name">${esc(renameOnDate.previousName)}</span>
        <span class="rename-arrow">→</span>
        <span class="new-name">${esc(renameOnDate.newName)}</span>
        <span class="rename-badge">改称</span>
      </span>
    `;
  } else if (isJustBorn) {
    labelHtml = `
      <span class="station-label station-open-label">
        ${esc(stationName)}
        <span class="open-badge">開業</span>
      </span>
    `;
  } else {
    labelHtml = `<span class="station-label">${esc(stationName)}</span>`;
  }

  return L.divIcon({
    html: `
      <div class="station-marker-with-label${popClass}${renameClass}">
        <div class="station-dot" style="background-color:${dotColor}"></div>
        ${labelHtml}
      </div>
    `,
    className: 'station-marker-wrapper',
    iconSize: [180, 28],
    iconAnchor: [6, 14],
  });
}

function dateToSliderValue(dateStr: string, minDate: string, maxDate: string): number {
  const min = new Date(minDate).getTime();
  const max = new Date(maxDate).getTime();
  const current = new Date(dateStr).getTime();
  return ((current - min) / (max - min)) * 100;
}

function sliderValueToDate(value: number, minDate: string, maxDate: string): string {
  const min = new Date(minDate).getTime();
  const max = new Date(maxDate).getTime();
  const date = new Date(min + (value / 100) * (max - min));
  return date.toISOString().slice(0, 10);
}

function formatTimelineEvent(ev: TimelineEvent): string {
  if (ev.kind === 'station') {
    const e = ev.event;
    if (e.type === 'open') return `${e.stationName} 開業`;
    if (e.type === 'rename') return `${e.previousName}→${e.stationName} 改称`;
    if (e.type === 'close') return `${e.stationName} 廃止`;
    return e.stationName;
  }
  return `路線名 ${ev.previousLineName}→${ev.newLineName}`;
}

function timelineEventBadgeClass(ev: TimelineEvent): string {
  if (ev.kind === 'lineName') return 'event-lineName';
  return `event-${ev.event.type}`;
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function formatDateDisplay(dateStr: string): string {
  const date = new Date(dateStr);
  const y = date.getFullYear();
  let era: string;
  let year: number;
  if (y < 1912) {
    era = '明治';
    year = y - 1867;
  } else if (y < 1926) {
    era = '大正';
    year = y - 1911;
  } else if (y < 1989) {
    era = '昭和';
    year = y - 1925;
  } else if (y < 2019) {
    era = '平成';
    year = y - 1988;
  } else {
    era = '令和';
    year = y - 2018;
  }
  return `${dateStr} (${era}${year}年)`;
}

const DEFAULT_LINE_COLOR = '#1d3557';
/** 全路線モードでは駅が路線横断で混在するためドットはニュートラル色 */
const ALL_ROUTES_MARKER_DOT_COLOR = '#64748b';
const ROUTE_WEIGHT = 3;

const FLY_DURATION = 0.8;

function MapBounds({
  positions,
  focusPositions,
}: {
  positions: [number, number][];
  focusPositions: [number, number][];
}) {
  const map = useMap();
  useEffect(() => {
    if (positions.length === 0) return;
    map.invalidateSize();
    const targetPositions = focusPositions.length > 0 ? focusPositions : positions;
    if (targetPositions.length >= 2) {
      const bounds = L.latLngBounds(targetPositions);
      map.flyToBounds(bounds, {
        padding: focusPositions.length > 0 ? [80, 80] : [50, 50],
        maxZoom: focusPositions.length > 0 ? 14 : 12,
        duration: FLY_DURATION,
        easeLinearity: 0.25,
      });
    } else if (targetPositions.length === 1) {
      map.flyTo(targetPositions[0], 14, {
        duration: FLY_DURATION,
        easeLinearity: 0.25,
      });
    }
  }, [map, positions, focusPositions]);
  return null;
}

interface TimelineMapProps {
  routeApi: StationHistoryApi;
  routeId: RouteId;
  /** 全路線モードで各路線ごとに線を描画する場合のAPI配列 */
  routeApisForPolylines?: StationHistoryApi[];
  /** 単一路線表示時の線・駅ドット色 */
  lineColor?: string;
  /** 全路線表示時の各路線の線色（`routeApisForPolylines` と同じ長さ・順序） */
  polylineColors?: string[];
}

export function TimelineMap({
  routeApi,
  routeId,
  routeApisForPolylines,
  lineColor,
  polylineColors,
}: TimelineMapProps) {
  const { stationEvents, lineNameEvents, MIN_DATE, MAX_DATE } = routeApi;

  const eventDates = useMemo(() => {
    const dates = [...stationEvents.map((e) => e.date), ...lineNameEvents.map((e) => e.date)];
    return [...new Set(dates)].sort();
  }, [stationEvents, lineNameEvents]);

  const [currentDate, setCurrentDate] = useState(MIN_DATE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setCurrentDate(MIN_DATE);
    setSliderValue(0);
  }, [routeApi, MIN_DATE]);
  const [playSpeedMs, setPlaySpeedMs] = useState(1200);

  const stations = useMemo(() => routeApi.getStationsAtDate(currentDate), [routeApi, currentDate]);
  const eventsOnDate = useMemo(() => routeApi.getTimelineEventsOnDate(currentDate), [routeApi, currentDate]);
  const { last: lastEvent, next: nextEvent } = useMemo(
    () => routeApi.getNearestTimelineEvents(currentDate),
    [routeApi, currentDate]
  );

  const routePositions = useMemo(
    () => stations.map((s) => [s.lat, s.lon] as [number, number]),
    [stations]
  );

  /** 各路線ごとのポリライン用座標（全路線モード時は各路線別、通常はnullで単一のroutePositionsを使用） */
  const polylinePositionsList = useMemo(() => {
    if (routeApisForPolylines) {
      return routeApisForPolylines.map((api) =>
        api.getStationsAtDate(currentDate).map((s) => [s.lat, s.lon] as [number, number])
      );
    }
    return null;
  }, [routeApisForPolylines, currentDate]);

  const focusPositions = useMemo(
    () =>
      stations
        .filter((s) => routeApi.getStationOpenDate(s.lat, s.lon) === currentDate)
        .map((s) => [s.lat, s.lon] as [number, number]),
    [routeApi, stations, currentDate]
  );

  const currentYear = useMemo(() => new Date(currentDate).getFullYear(), [currentDate]);
  const japaneseHistory = useMemo(
    () => getJapaneseHistoryForYear(currentYear),
    [currentYear]
  );

  const isAllRoutesMode = Boolean(routeApisForPolylines);
  const markerDotColor = isAllRoutesMode ? ALL_ROUTES_MARKER_DOT_COLOR : (lineColor ?? DEFAULT_LINE_COLOR);
  const singlePolylineColor = lineColor ?? DEFAULT_LINE_COLOR;

  const jumpToNextEvent = useCallback(() => {
    const nextIdx = eventDates.findIndex((d) => d > currentDate);
    if (nextIdx >= 0) {
      setCurrentDate(eventDates[nextIdx]);
      setSliderValue(dateToSliderValue(eventDates[nextIdx], MIN_DATE, MAX_DATE));
    } else {
      setIsPlaying(false);
    }
  }, [currentDate, eventDates, MIN_DATE, MAX_DATE]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(jumpToNextEvent, playSpeedMs);
    return () => clearInterval(timer);
  }, [isPlaying, jumpToNextEvent, playSpeedMs]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderValue(value);
    setCurrentDate(sliderValueToDate(value, MIN_DATE, MAX_DATE));
  };

  const handleDateClick = (dateStr: string) => {
    setCurrentDate(dateStr);
    setSliderValue(dateToSliderValue(dateStr, MIN_DATE, MAX_DATE));
    if (isPlaying) setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      const nextIdx = eventDates.findIndex((d) => d > currentDate);
      if (nextIdx < 0) {
        setCurrentDate(MIN_DATE);
        setSliderValue(0);
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="timeline-map">
      <div className="timeline-controls">
        <div className="timeline-info">
          <span className="current-date">{formatDateDisplay(currentDate)}</span>
          <span className="station-count">{stations.length}駅</span>
        </div>
        <div className="timeline-events-info">
          {eventsOnDate.length > 0 ? (
            <div className="timeline-events-on-date">
              <span className="timeline-events-label">この日に起きたこと：</span>
              <span className="timeline-events-list">
                {eventsOnDate.map((ev, i) => (
                  <span key={i} className={`timeline-event-badge ${timelineEventBadgeClass(ev)}`}>
                    {formatTimelineEvent(ev)}
                  </span>
                ))}
              </span>
            </div>
          ) : (
            <div className="timeline-events-context">
              <span className="timeline-events-label">この期間：</span>
              <span className="timeline-events-context-detail">
                {lastEvent && (
                  <span>
                    直近 {formatDateShort(lastEvent.kind === 'station' ? lastEvent.event.date : lastEvent.date)}{' '}
                    {formatTimelineEvent(lastEvent)}
                  </span>
                )}
                {lastEvent && nextEvent && <span className="timeline-events-sep">／</span>}
                {nextEvent && (
                  <span>
                    次回 {formatDateShort(nextEvent.kind === 'station' ? nextEvent.event.date : nextEvent.date)}{' '}
                    {formatTimelineEvent(nextEvent)}
                  </span>
                )}
                {!lastEvent && !nextEvent && <span>イベントなし</span>}
              </span>
            </div>
          )}
        </div>
        {japaneseHistory.length > 0 && (
          <div className="timeline-japanese-history">
            <span className="timeline-events-label">{currentYear}年の日本：</span>
            <span className="timeline-japanese-history-list">
              {japaneseHistory.map((event, i) => (
                <span key={i} className="timeline-japanese-history-badge">
                  {event}
                </span>
              ))}
            </span>
          </div>
        )}
        <div className="timeline-slider-row">
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={handleSliderChange}
            className="timeline-slider"
          />
          <div className="timeline-speed-control">
            <label htmlFor="play-speed" className="timeline-speed-label">
              速さ
            </label>
            <select
              id="play-speed"
              value={playSpeedMs}
              onChange={(e) => setPlaySpeedMs(Number(e.target.value))}
              className="timeline-speed-select"
              title="再生速度"
            >
              <option value={2500}>遅い (2.5秒)</option>
              <option value={1200}>普通 (1.2秒)</option>
              <option value={600}>速い (0.6秒)</option>
              <option value={300}>最速 (0.3秒)</option>
            </select>
          </div>
          <button
            onClick={handlePlayPause}
            className={`play-button ${isPlaying ? 'playing' : ''}`}
            title={isPlaying ? '一時停止' : '再生'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={[35.85, 139.5]}
          zoom={10}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapBounds positions={routePositions} focusPositions={focusPositions} />
          {polylinePositionsList ? (
            polylinePositionsList.map((positions, i) =>
              positions.length >= 2 ? (
                <Polyline
                  key={i}
                  positions={positions}
                  pathOptions={{
                    color: polylineColors?.[i] ?? DEFAULT_LINE_COLOR,
                    weight: ROUTE_WEIGHT,
                  }}
                />
              ) : null
            )
          ) : (
            <Polyline
              positions={routePositions}
              pathOptions={{ color: singlePolylineColor, weight: ROUTE_WEIGHT }}
            />
          )}
          {stations.map((station) => {
            const stationHistory = routeApi.getStationFullHistory(station.lat, station.lon);
            const openDate = routeApi.getStationOpenDate(station.lat, station.lon);
            const isJustBorn = openDate === currentDate;
            const renameOnDate = routeApi.getRenameEventOnDate(station.lat, station.lon, currentDate);
            const { wikipediaUrl, officialLinks } =
              routeId === 'all' && routeApisForPolylines
                ? getStationExternalLinks('all', station.name, {
                    currentDate,
                    lat: station.lat,
                    lon: station.lon,
                    individualApis: routeApisForPolylines,
                    individualRouteIds: ROUTE_DROPDOWN_ORDER,
                  })
                : getStationExternalLinks(routeId, station.name);
            return (
              <Marker
                key={`${station.lat}-${station.lon}-${station.name}`}
                position={[station.lat, station.lon]}
                icon={createStationIcon(station.name, isJustBorn, renameOnDate, markerDotColor)}
              >
                <Popup>
                  <div className="popup-station">
                    <div className="popup-station-header">
                      <strong className="popup-station-name">{station.name}</strong>
                      <span className="popup-station-links">
                        {officialLinks.map((link, i) => (
                          <Fragment key={`${i}-${link.url}`}>
                            {i > 0 ? (
                              <span className="popup-station-links-sep" aria-hidden="true">
                                ·
                              </span>
                            ) : null}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`popup-station-link${routeId === 'all' ? ' popup-station-link--route' : ''}`}
                            >
                              {link.label}
                            </a>
                          </Fragment>
                        ))}
                        {officialLinks.length > 0 ? (
                          <span className="popup-station-links-sep" aria-hidden="true">
                            ·
                          </span>
                        ) : null}
                        <a
                          href={wikipediaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="popup-station-link"
                        >
                          Wikipedia
                        </a>
                      </span>
                    </div>
                    <div className="popup-station-history">
                      <div className="popup-station-history-title">駅の歴史</div>
                      <ul className="popup-station-history-list">
                        {stationHistory.map((h, i) => (
                          <li key={i} className={`popup-history-item history-${h.type}`}>
                            <button
                              type="button"
                              className="popup-history-date popup-history-date-btn"
                              onClick={() => handleDateClick(h.date)}
                              title={`${h.date} へ移動`}
                            >
                              {h.date}
                            </button>
                            <span className="popup-history-label">{h.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
