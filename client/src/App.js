import React, { useState, useEffect } from 'react';
import LoadingImage from './assets/logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating initialization time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <div className="loading-container">
            <img src={LoadingImage} className="loading-image" alt="Loading" />
          </div>
        ) : (

          <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Dorians-Portfolio" element={<HomePage />} />
        </Routes>
        

        )}
      </div>
    </Router>
  );
}

export default App;
