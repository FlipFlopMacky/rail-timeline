import { useState } from 'react';
import './App.css';
import { TimelineMap } from './components/TimelineMap';
import {
  ROUTES,
  ROUTE_IDS,
  INDIVIDUAL_ROUTE_APIS,
  INDIVIDUAL_ROUTE_LINE_COLORS,
  ROUTE_LINE_COLORS,
  type RouteId,
} from './data/routes';

function App() {
  const [routeId, setRouteId] = useState<RouteId>('all');
  const { api } = ROUTES[routeId];

  return (
    <div className="app">
      <header className="header">
        <h1>駅の歴史 タイムライン</h1>
        <div className="route-selector">
          <label htmlFor="route-select">路線：</label>
          <select
            id="route-select"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value as RouteId)}
            className="route-select"
          >
            {ROUTE_IDS.map((id) => (
              <option key={id} value={id}>
                {ROUTES[id].data.name}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main className="map-container">
        <TimelineMap
          routeApi={api}
          routeApisForPolylines={routeId === 'all' ? INDIVIDUAL_ROUTE_APIS : undefined}
          polylineColors={routeId === 'all' ? INDIVIDUAL_ROUTE_LINE_COLORS : undefined}
          lineColor={routeId !== 'all' ? ROUTE_LINE_COLORS[routeId] : undefined}
        />
      </main>
    </div>
  );
}

export default App;
