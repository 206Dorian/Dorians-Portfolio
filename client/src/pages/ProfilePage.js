import React from 'react';
import './ProfilePage.css';
import Footer from '../components/Footer';
import posed from '../assets/posed.jpg';

const Profile = () => {
    return (
        <main>
            <div className="main-content">
                <img className="profile-image" src={posed} alt="A posed picture" />


                <div className="about-me">
                    <h2>A bit more about me and my experience</h2>
                    <p>Im an interior designer turned web developer, I've lived a lot of places and I call the Pacific Northwest home now.
                    </p>
                    <br />
                    <p>
                        My interior design experience has taugth me so much about asthetics and workign with architects and having ot make thigs happen in a tather abstract workd really prepared me for the world of web development. Managing projects, clients a nd creating something from nothing.
                    </p>
                    <br/>
                    <p>
                        All this has really helped me understand front end and back end together, my mother was very driven and very creative, my father was an engineer, so I got both those brain sides.
                    </p>
                </div>

            </div>
            <Footer />
        </main>
    );
}

export default Profile;
