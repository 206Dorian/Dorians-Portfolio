import React from 'react'
import robot from '../../assets/robot.jpg';



const DidacticLift = () => {
  return (
    <div className="project-card">
    <h1>

     <a href="https://didactic-lift.herokuapp.com/" target="_blank" rel="noreferrer">
      Didactic Lift
      
      <img src={robot} alt="TallTalk project preview" />
      </a>

      <h6>A bit about DidacticLift, a workout app to help you target any muscle in your body and keep track of your favorites </h6>

      </h1>
    </div>
  )
}

export default DidacticLift