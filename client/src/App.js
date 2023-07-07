import React, { useState, useEffect } from 'react';
// import LoadingImage from './assets/logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectA from './pages/ProjectA';
import ProjectB from './pages/ProjectB';
import ProjectC from './pages/ProjectC';
import ProjectD from './pages/ProjectD';
import ProjectE from './pages/ProjectE';
import ProjectF from './pages/ProjectF';


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
            {/* <img src={LoadingImage} className="loading-image" alt="Loading" /> */}
          </div>
        ) : (

          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dorians-Portfolio" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/project-a" element={<ProjectA />} />
          <Route path="/portfolio/project-b" element={<ProjectB />} />
          <Route path="/portfolio/project-c" element={<ProjectC />} />
          <Route path="/portfolio/project-d" element={<ProjectD />} />
          <Route path="/portfolio/project-e" element={<ProjectE />} />
          <Route path="/portfolio/project-f" element={<ProjectF />} />
        </Routes>
        

        )}
      </div>
    </Router>
  );
}

export default App;
