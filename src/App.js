import React, { useEffect, useState } from 'react';
import './App.css';
import WaterList from './Components/WaterList';

function App() {
  const [site, setSite] = useState({ siteName: "", levels: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7157/WaterData/GetWaterLevels")
        .then(res => res.json())
        .then((result) => {
                setSite(result);
            },
            (error) => {
                setError(error);
            }
        )
  }, []);

  return (
    <div className="App">
      <div style={{ width:"100%", padding:"15px" }}>Mean Daily Depth of { site.siteName }</div>
      <WaterList unitCode={ site.unitCode } levels={ site.levels } />
    </div>
  );
}

export default App;
