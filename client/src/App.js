import React, { useState, useEffect } from 'react';
// import LoadingImage from './assets/logo.jpg';


import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ArtCart from './pages/projects/ArtCart';
import DidacticLift from './pages/projects/DidacticLift';
import My100 from './pages/projects/My100';
import TallTalk from './pages/projects/TallTalk';
import WeatherDisco from './pages/projects/WeatherDisco';
import WeiFull from './pages/projects/WeiFull';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating initialization time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <div className="loading-container">
            {/* <img src={LoadingImage} className="loading-image" alt="Loading" /> */}
          </div>
        ) : (

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Dorians-Portfolio" element={<HomePage />} />
            <Route path="/portfolio/art-cart" element={<ArtCart />} />
            <Route path="/portfolio/didactic-lift" element={<DidacticLift />} />
            <Route path="/portfolio/my100" element={<My100 />} />
            <Route path="/portfolio/tall-talk" element={<TallTalk />} />
            <Route path="/portfolio/weather-disco" element={<WeatherDisco />} />
            <Route path="/portfolio/wei-full" element={<WeiFull />} />

          </Routes>


        )}
      </div>
    </Router>
  );
}

export default App;
