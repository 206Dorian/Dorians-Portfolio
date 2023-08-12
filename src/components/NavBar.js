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
        <br/><br/>
        <button onClick={() => handlePageChange('about')}>Want to know more about me? This is the button for you!</button>
        <br/><br/>
        <button onClick={() => handlePageChange('projects')}>Want to see my Projects, right here sis!</button>
        {/* Add more navigation buttons if needed */}
      </nav>
    </div>
  
  );
};

export default NavBar;
