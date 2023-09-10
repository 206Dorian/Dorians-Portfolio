import React from 'react'
import robot from '../../assets/robot.jpg';



const DidacticLift = () => {
  return (
    <div className="project-card">
    <h1>

     <a href="https://didactic-lift.herokuapp.com/" target="_blank" rel="noreferrer">
      Didactic Lift
      <br></br>
      <img src={robot} alt="TallTalk project preview" />
      </a>

      <p>A bit about DidacticLift</p>

      </h1>
    </div>
  )
}

export default DidacticLift