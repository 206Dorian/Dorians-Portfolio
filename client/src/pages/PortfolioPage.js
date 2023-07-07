import React from 'react'

const PortfolioPage = () => {
  return (
    <>
        <h2>MY PROJECTS</h2>
        <ul>
        <li><Link to="/projects/A">A</Link></li>
            <br />
            <li><Link to="/projects/B">B</Link></li>
            <br />
            <li><Link to="/projects/C">C</Link></li>
        </ul>
        <h2>MY RESUME</h2>
        <a href="/assets/DorianResume.pdf" target="_blank" rel="noreferrer">View my resume</a>

    </>
  )
}

export default PortfolioPage
