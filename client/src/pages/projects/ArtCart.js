import React from 'react';
import artCartImage from '../../assets/Art Cart.png'; // Adjust the path if needed
import './ArtCart.css';



const ArtCart = () => {
  return (
    <div className="project-card">
<h1>
      <a href="https://art-cart-gui-guys-production.herokuapp.com/login" target="_blank" rel="noreferrer">
        ArtCart
        
      <img src={artCartImage} alt="Screenshot of ArtCart project" />
      </a>

      <p>A bit about Artcart</p>

      </h1>
    </div>
  );
};

export default ArtCart;
