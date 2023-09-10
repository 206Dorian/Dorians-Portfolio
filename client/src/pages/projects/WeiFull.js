import React from 'react';
import './WeiFull.css'; 
import bread from '../../assets/bread.png';


const WeiFull = () => {
  return (
    <div className="project-card">
      <h1>
        <a href="https://ruxinqu.github.io/wei-full/" target="_blank" rel="noreferrer">
          Weifull
        <p>Food Finder on the go</p>
        <img src={bread} alt="Description of my project" />
        </a>
      </h1>
    </div>
  );
};

export default WeiFull;
