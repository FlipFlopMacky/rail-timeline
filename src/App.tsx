import './App.css';
import { TimelineMap } from './components/TimelineMap';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>東武東上線 駅の歴史</h1>
      </header>
      <main className="map-container">
        <TimelineMap />
      </main>
    </div>
  );
}

export default App;
