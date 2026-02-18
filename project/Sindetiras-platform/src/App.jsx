import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import AboutSindetiras from './pages/AboutSindetiras';
import Activities from './pages/Activities';
import Maps from './pages/Maps';
import Experiences from './pages/Experiences';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-with-offset">          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_Sindetiras" element={<AboutSindetiras />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/experiences" element={<Experiences />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
