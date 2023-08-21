import React from 'react';
import './ProfilePage.css';
import Footer from '../components/Footer';


const Profile = () => {
    return (
        <main>
            
            <h2 className="about-me"> A bit more about me and my experience
            <img src="/assets/posed.jpg" alt="A posed picture" />

            Im an interior designer turned web developer, i've lived a lot of places and I call the Pacific Northwest home now. </h2>

            <Footer/>
        </main>
    ); 
}

export default Profile;
