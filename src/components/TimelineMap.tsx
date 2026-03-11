import { useState, useCallback, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  getStationsAtDate,
  getStationOpenDate,
  getRenameEventOnDate,
  getStationFullHistory,
  getEventsOnDate,
  getNearestEvents,
  stationEvents,
  type StationEvent,
  MIN_DATE,
  MAX_DATE,
} from '../data/stationHistory';
import { getJapaneseHistoryForYear } from '../data/japaneseHistory';

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createStationIcon(
  stationName: string,
  isJustBorn: boolean,
  renameOnDate: { previousName: string; newName: string } | null
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
        <div class="station-dot"></div>
        ${labelHtml}
      </div>
    `,
    className: 'station-marker-wrapper',
    iconSize: [180, 28],
    iconAnchor: [6, 14],
  });
}

function dateToSliderValue(dateStr: string): number {
  const min = new Date(MIN_DATE).getTime();
  const max = new Date(MAX_DATE).getTime();
  const current = new Date(dateStr).getTime();
  return ((current - min) / (max - min)) * 100;
}

function sliderValueToDate(value: number): string {
  const min = new Date(MIN_DATE).getTime();
  const max = new Date(MAX_DATE).getTime();
  const date = new Date(min + (value / 100) * (max - min));
  return date.toISOString().slice(0, 10);
}

function formatEventShort(e: StationEvent): string {
  if (e.type === 'open') return `${e.stationName} 開業`;
  if (e.type === 'rename') return `${e.previousName}→${e.stationName} 改称`;
  if (e.type === 'close') return `${e.stationName} 廃止`;
  return e.stationName;
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function formatDateDisplay(dateStr: string): string {
  const date = new Date(dateStr);
  const era = date.getFullYear() < 1926 ? '大正' : date.getFullYear() < 1989 ? '昭和' : date.getFullYear() < 2019 ? '平成' : '令和';
  let year: number;
  if (date.getFullYear() < 1926) year = date.getFullYear() - 1911;
  else if (date.getFullYear() < 1989) year = date.getFullYear() - 1925;
  else if (date.getFullYear() < 2019) year = date.getFullYear() - 1988;
  else year = date.getFullYear() - 2018;
  return `${dateStr} (${era}${year}年)`;
}

const ROUTE_COLOR = '#1d3557';
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

export function TimelineMap() {
  const eventDates = useMemo(() => {
    const dates = [...new Set(stationEvents.map((e) => e.date))].sort();
    return dates;
  }, []);

  const [currentDate, setCurrentDate] = useState(MIN_DATE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [playSpeedMs, setPlaySpeedMs] = useState(1200);

  const stations = useMemo(() => getStationsAtDate(currentDate), [currentDate]);
  const eventsOnDate = useMemo(() => getEventsOnDate(currentDate), [currentDate]);
  const { last: lastEvent, next: nextEvent } = useMemo(
    () => getNearestEvents(currentDate),
    [currentDate]
  );

  const routePositions = useMemo(
    () => stations.map((s) => [s.lat, s.lon] as [number, number]),
    [stations]
  );

  const focusPositions = useMemo(
    () =>
      stations
        .filter((s) => getStationOpenDate(s.lat, s.lon) === currentDate)
        .map((s) => [s.lat, s.lon] as [number, number]),
    [stations, currentDate]
  );

  const currentYear = useMemo(() => new Date(currentDate).getFullYear(), [currentDate]);
  const japaneseHistory = useMemo(
    () => getJapaneseHistoryForYear(currentYear),
    [currentYear]
  );

  const jumpToNextEvent = useCallback(() => {
    const nextIdx = eventDates.findIndex((d) => d > currentDate);
    if (nextIdx >= 0) {
      setCurrentDate(eventDates[nextIdx]);
      setSliderValue(dateToSliderValue(eventDates[nextIdx]));
    } else {
      setIsPlaying(false);
    }
  }, [currentDate, eventDates]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(jumpToNextEvent, playSpeedMs);
    return () => clearInterval(timer);
  }, [isPlaying, jumpToNextEvent, playSpeedMs]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderValue(value);
    setCurrentDate(sliderValueToDate(value));
  };

  const handleDateClick = (dateStr: string) => {
    setCurrentDate(dateStr);
    setSliderValue(dateToSliderValue(dateStr));
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
                {eventsOnDate.map((e, i) => (
                  <span key={i} className={`timeline-event-badge event-${e.type}`}>
                    {formatEventShort(e)}
                  </span>
                ))}
              </span>
            </div>
          ) : (
            <div className="timeline-events-context">
              <span className="timeline-events-label">この期間：</span>
              <span className="timeline-events-context-detail">
                {lastEvent && (
                  <span>直近 {formatDateShort(lastEvent.date)} {formatEventShort(lastEvent)}</span>
                )}
                {lastEvent && nextEvent && <span className="timeline-events-sep">／</span>}
                {nextEvent && (
                  <span>次回 {formatDateShort(nextEvent.date)} {formatEventShort(nextEvent)}</span>
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
          <Polyline
            positions={routePositions}
            pathOptions={{ color: ROUTE_COLOR, weight: ROUTE_WEIGHT }}
          />
          {stations.map((station) => {
            const stationHistory = getStationFullHistory(station.lat, station.lon);
            const openDate = getStationOpenDate(station.lat, station.lon);
            const isJustBorn = openDate === currentDate;
            const renameOnDate = getRenameEventOnDate(station.lat, station.lon, currentDate);
            return (
              <Marker
                key={`${station.lat}-${station.lon}-${station.name}`}
                position={[station.lat, station.lon]}
                icon={createStationIcon(station.name, isJustBorn, renameOnDate)}
              >
                <Popup>
                  <div className="popup-station">
                    <strong className="popup-station-name">{station.name}</strong>
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
