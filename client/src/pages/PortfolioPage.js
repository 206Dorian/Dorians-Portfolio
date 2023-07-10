import React from 'react'
import { Link } from 'react-router-dom';
import ArtCart from './projects/ArtCart';
import DidacticLift from './projects/DidacticLift';
import WeiFull from './projects/WeiFull'
import WeatherDisco from './projects/WeatherDisco';


const PortfolioPage = () => {
  return (
    <div>
        <h2>MY PROJECTS</h2>
        <ul>
        <li><WeiFull/></li>
        <br />
        <li><WeatherDisco/></li>
        <br />
        <li><Link to="/projects/TallTalk">TallTalk</Link></li>
        <br />
        <li><Link to="/projects/My100">My100</Link></li>
        <br />
        <li><DidacticLift/></li>
        <br />
        <li><ArtCart/></li>
      </ul>
        <h2>MY RESUME</h2>
        <a href="/assets/DorianResume.pdf" target="_blank" rel="noreferrer">View my resume</a>

    </div>
  )
}

export default PortfolioPage
