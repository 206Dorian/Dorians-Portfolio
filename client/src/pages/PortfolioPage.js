import React from 'react'

import ArtCart from './projects/ArtCart';
import DidacticLift from './projects/DidacticLift';
import My100 from './projects/My100';
import TallTalk from './projects/TallTalk';
import WeatherDisco from './projects/WeatherDisco';
import WeiFull from './projects/WeiFull'

const PortfolioPage = () => {
  return (
    <div>
        <h2>MY PROJECTS</h2>
        
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
      
        <h2>MY RESUME</h2>
        <a href="/assets/DorianResume.pdf" target="_blank" rel="noreferrer">View my resume</a>

    </div>
  )
}

export default PortfolioPage
