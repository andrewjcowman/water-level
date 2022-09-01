import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import LevelsPage from './Pages/LevelsPage';

function App() {
  return (
    <div className="App">
      <header style={{ height:"85px", borderBottom:"2px solid white", marginBottom:"25px", textAlign:"left", paddingLeft:"25px", display:"flex" }}>
        <span style={{ color:"#79addb", fontSize:"36px", alignSelf:"flex-end" }}>Water Data Service</span>
      </header>
      <div style={{ width:"75%", backgroundColor:"whitesmoke", margin:"0 auto" }}>
        <Router>
          <Routes>
            <Route exact path='/' element={ <MainPage /> } />
            <Route path='/levels/:siteId' element={ <LevelsPage /> } />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;