import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'; // Don't forget to import the CSS
import './Header.css';

const Header = () => {
    return (
        <header>
            <br></br>
            <Typist cursor={{ show: false }}>
                <h1>Dorian Douglas Birch
                    <br />
                    Welcome to My Portfolio</h1>
            </Typist>
            <br />
        </header>
    );
}

export default Header;
