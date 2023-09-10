import React from 'react';
import './WeiFull.css'; 
import bread from '../../assets/bread.png';


const WeiFull = () => {
  return (
    <div className="project-card">
      <h1>
        <a href="https://ruxinqu.github.io/wei-full/" target="_blank" rel="noreferrer">
          Weifull
        <img src={bread} alt="Loaf of bread" />
        </a>
        <h6>Food Finder on the go, cant decide whether to go out or stay in?  
           We've got you covered, find a restaurant nearby or look up recipes from things you already have in your refridgerator.</h6>
      </h1>
    </div>
  );
};

export default WeiFull;
