import React from 'react';
import './NavBar.css';

const NavBar  = ({setCurrentPage}) => {
const handlePageChange = (page) => {
  setCurrentPage(page);
}

  return (
    
    <div className="card">
      <nav className="navbar">
        <button onClick={() => handlePageChange('home')}>Home</button>
        
        <button onClick={() => handlePageChange('about')}>About</button>
       
        <button onClick={() => handlePageChange('projects')}>Projects</button>
        {/* Add more navigation buttons if needed */}
      </nav>
    </div>
  
  );
};

export default NavBar;
