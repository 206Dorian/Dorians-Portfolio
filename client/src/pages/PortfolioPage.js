import React from 'react'

import ArtCart from './projects/ArtCart';
import DidacticLift from './projects/DidacticLift';
import My100 from './projects/My100';
import TallTalk from './projects/TallTalk';
import WeatherDisco from './projects/WeatherDisco';
import WeiFull from './projects/WeiFull'
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <div>
      <br></br>
        <h1>MY PROJECTS</h1>
        <br></br>
        <WeiFull/>
        <br />
        <WeatherDisco/>
        <br />
        <TallTalk/>
        <br />
        <My100/>
        <br />
        <DidacticLift/>
        <br />
        <ArtCart/>
      <br></br>
      <Footer/>
       
    </div>
  )
}

export default PortfolioPage
