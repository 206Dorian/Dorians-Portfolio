import React from 'react';

const NavBar = ({setCurrentPage}) => {
const handlePageChange = (page) => {
  setCurrentPage(page);
}

  return (
    <div className="card-container">
    <div className="card">
      <nav>
        <button onClick={() => handlePageChange('home')}>Home</button>
        <br />
        <button onClick={() => handlePageChange('about')}>About</button>
        <br />
        <button onClick={() => handlePageChange('projects')}>Projects</button>
        {/* Add more navigation buttons if needed */}
      </nav>
    </div>
  </div>
  );
};

export default NavBar;
