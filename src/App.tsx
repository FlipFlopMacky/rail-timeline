import { useState } from 'react';
import './App.css';
import { TimelineMap } from './components/TimelineMap';
import { ROUTES, INDIVIDUAL_ROUTE_APIS, type RouteId } from './data/routes';

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
            <option value="all">全路線</option>
            <option value="tojo">東武東上線（池袋～寄居）</option>
            <option value="chichibu">秩父鉄道秩父本線（羽生～三峰口）</option>
            <option value="skytree">東武スカイツリーライン（浅草～東武動物公園）</option>
            <option value="musashino">JR武蔵野線（府中本町～西船橋）</option>
            <option value="seibuIkebukuro">西武池袋線（池袋～吾野）</option>
            <option value="seibuChichibu">西武秩父線（吾野～西武秩父）</option>
            <option value="seibuShinjuku">西武新宿線（西武新宿～本川越）</option>
            <option value="seibuKokubunji">西武国分寺線（国分寺～東村山）</option>
            <option value="tobuNoda">東武野田線・アーバンパークライン（大宮～船橋）</option>
          </select>
        </div>
      </header>
      <main className="map-container">
        <TimelineMap
          routeApi={api}
          routeApisForPolylines={routeId === 'all' ? INDIVIDUAL_ROUTE_APIS : undefined}
        />
      </main>
    </div>
  );
}

export default App;
