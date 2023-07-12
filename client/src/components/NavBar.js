import React from 'react';

const NavBar = ({setCurrentPage}) => {
const handlePageChange = (page) => {
  setCurrentPage(page);
}

  return (
    <nav>
    <button onClick={() => handlePageChange('home')}>Home</button>
    <br></br>
    <button onClick={() => handlePageChange('about')}>About</button>
    <br></br>
    <button onClick={() => handlePageChange('projects')}>Projects</button>
    {/* Add more navigation buttons if needed */}
  </nav>
  );
};

export default NavBar;
