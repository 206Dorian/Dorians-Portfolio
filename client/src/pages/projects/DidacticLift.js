import React from 'react'
import robot from '../../assets/robot.jpg';



const DidacticLift = () => {
  return (
    <div className="project-card">
    <h1>
     <a href="https://didactic-lift.herokuapp.com/" target="_blank" rel="noreferrer">
      Didactic Lift
      <p>A bit about DidacticLift</p>
      <img src={robot} alt="TallTalk project preview" />
      </a>
      </h1>
    </div>
  )
}

export default DidacticLift