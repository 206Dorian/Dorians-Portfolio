import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import logo from './assets/logo.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
        <Loading />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          
          <p>
            Please enjoy this dog with a muffin defying gravity while we update this site!
          </p>
          <a
            className="App-link"
            href="https://206dorian.github.io/dorian-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Here is my temporary portfolio that got very messed up, but is still working until I finish this site. 
          </a>
        </header>
      )}
    </div>
    
    </Router>
  );
}

export default App;
