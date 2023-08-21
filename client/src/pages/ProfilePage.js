import React from 'react';
import './ProfilePage.css';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <main>
            <div className="main-content">
                <img className="profile-image" src="/assets/posed.jpg" alt="A posed picture" />
                
                <div className="about-me"> 
                    <h2>A bit more about me and my experience</h2>
                    <p>Im an interior designer turned web developer, I've lived a lot of places and I call the Pacific Northwest home now.</p>
                   
                </div>
                
            </div>
            <Footer />
        </main>
    );
}

export default Profile;
