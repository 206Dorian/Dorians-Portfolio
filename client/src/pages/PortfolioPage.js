import React from 'react'
import { Link } from 'react-router-dom';
const PortfolioPage = () => {
  return (
    <>
        <h2>MY PROJECTS</h2>
        <ul>
        <li><Link to="/projects/WeiFull">WeiFull</Link></li>
        <br />
        <li><Link to="/projects/WeatherDisco">WeatherDisco</Link></li>
        <br />
        <li><Link to="/projects/TallTalk">TallTalk</Link></li>
        <br />
        <li><Link to="/projects/My100">My100</Link></li>
        <br />
        <li><Link to="/projects/DidacticLift">DidacticLift</Link></li>
        <br />
        <li><Link to="/projects/ArtCart">ArtCart</Link></li>
      </ul>
        <h2>MY RESUME</h2>
        <a href="/assets/DorianResume.pdf" target="_blank" rel="noreferrer">View my resume</a>

    </>
  )
}

export default PortfolioPage
