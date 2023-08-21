import React from 'react';
import './ProfilePage.css';
import Footer from '../components/Footer';
const Profile = () => {
    return (
        <main>
            <h1> About Me</h1>
            <h2 className="about-me"> Im an interior designer turned web developer, i've lived a lot of places and I call the Pacific Northwest home now. </h2>

            <Footer/>
        </main>
    ); 
}

export default Profile;
