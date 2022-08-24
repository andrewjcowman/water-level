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
    <div className="App container-fluid">
      <div className="col-xs-12" style={{ padding:"15px", fontSize:"24px" }}>Mean Daily Depth of { site.siteName }</div>
      <WaterList unitCode={ site.unitCode } levels={ site.levels } />
    </div>
  );
}
//<div style={{ width:"100%", padding:"15px", boxSizing: "border-box", fontSize:"24px" }}>Mean Daily Depth of { site.siteName }</div>
export default App;
