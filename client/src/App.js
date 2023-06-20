import React, { useState, useEffect } from 'react';
import LoadingImage from './assets/logo.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';  
import ProjectsPage from './pages/Projects'; 


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
          <header className="App-header">
            <h1>Welcome to My Portfolio</h1>
            
            <p>Work in progress</p>
            <Link to="/projects" className="btn">
              Go to Projects
            </Link>
          </header>
          
        )}
      </div>
    </Router>
  );
}

export default App;
