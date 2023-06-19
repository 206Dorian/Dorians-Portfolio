import React, { useState, useEffect } from 'react';
import LoadingImage from './assets/logo.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating initialization time
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
            <p>Please enjoy this dog with a muffin defying gravity while we update this site!</p>
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
