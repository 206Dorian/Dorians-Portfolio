import React, { useState, useEffect } from 'react';
// import LoadingImage from './assets/logo.jpg';
import Header from './components/Header';

import './App.css';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ArtCart from './pages/projects/ArtCart';
import DidacticLift from './pages/projects/DidacticLift';
import My100 from './pages/projects/My100';
import TallTalk from './pages/projects/TallTalk';
import WeatherDisco from './pages/projects/WeatherDisco';
import WeiFull from './pages/projects/WeiFull';
import NavBar from './components/NavBar';
import ProfilePage from './pages/ProfilePage';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        // Simulating initialization time
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch(currentPage) {
            case 'home': return <HomePage />;
            case 'projects': return <PortfolioPage />;
            case 'about': return <ProfilePage />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="App">
            {isLoading ? (
                <div className="loading-container">
                    {/* <img src={LoadingImage} className="loading-image" alt="Loading" /> */}
                </div>
            ) : (
                <>
                    <Header /> 
                    <NavBar setCurrentPage={handlePageChange} />
                    {renderPage()}
                </>
            )}
        </div>
    );
}

export default App;
