import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DesktopPage from './pages/Desktop/DesktopPage';
import HeroPage from './pages/Hero/HeroPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/pc" element={<DesktopPage />} />
        </Routes>
    </Router>
  );
}

export default App;