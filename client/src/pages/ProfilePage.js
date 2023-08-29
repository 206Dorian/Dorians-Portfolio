import React from 'react';
import './ProfilePage.css';
import Footer from '../components/Footer';


const Profile = () => {
    return (
        <main>
            <div className="main-content">
                {/* <img className="profile-image" src={posed} alt="A posed picture" /> */}
                <img className="profile-image" src="/assets/posed.jpg" alt="A picture" />



                <div className="about-me">
                    <h2>A bit more about me and my experience</h2>
                    <br />

                    <p>Im an interior designer turned web developer, I've lived a lot of places and I call the Pacific Northwest home now.
                    </p>

                    <p>
                        My interior design experience has taught me so much about asthetics.
                        <br />
                        Working with architects and having to make things happen in a rather abstract way really prepared me for the world of web development.
                        Managing projects, clients and creating something from nothing.
                        <p />

                        <p>

                        </p>
                        All this has really helped me understand front end and back end together
                    </p>

                    <p>

                        My mother was very driven and very creative, my father was an engineer, so I'm always working with both sides of my brain.
                    </p>

                    <p>
                        a bitmore
                    </p>
                </div>

            </div>
            <Footer />
        </main>
    );
}

export default Profile;
