import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import AboutZagora from './pages/AboutZagora';
import Activities from './pages/Activities';
import Maps from './pages/Maps';
import PlanYourTrip from './pages/PlanYourTrip';
import Experiences from './pages/Experiences';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-with-offset">          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-zagora" element={<AboutZagora />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/experiences" element={<Experiences />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
