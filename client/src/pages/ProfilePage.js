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

                    <br></br>

                    <p>
                        I transitioned from a career in interior design to web development. Throughout my diverse experiences, I've called many places home, but the Pacific Northwest resonates the most with me.
                    </p>

                    <p>
                        Interior design sharpened my aesthetics and gave me the chance to work closely with architects. This collaborative and often abstract approach prepared me for web development's challenges. Managing projects, handling clients, and crafting something from scratch have given me a comprehensive understanding of both front and back end development.
                    </p>

                    <p>
                        With a mother who was creatively driven and an engineer father, I've always balanced both creative and logical perspectives in my endeavors.
                    </p>

                    <p>
                        MORE
                    </p>

                    <p>
                        MORE
                    </p>

                    <p>
                        MORE
                    </p>
                </div>

            </div>
            <Footer />
        </main>
    );
}

export default Profile;
