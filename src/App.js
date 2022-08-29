import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import LevelsPage from './Pages/LevelsPage';

function App() {
  return (
    <div className="App container-fluid">
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
  );
}

export default App;