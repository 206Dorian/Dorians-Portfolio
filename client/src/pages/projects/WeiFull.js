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
        <p>Food Finder on the go</p>
      </h1>
    </div>
  );
};

export default WeiFull;
