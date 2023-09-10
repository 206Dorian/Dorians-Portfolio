import React from 'react';
import questions from '../../assets/questions.jpg';

const TallTalk = () => {
  return (
    <div className="project-card">
      <h1>
        <a href="https://tall-talk-1dfa9fc02377.herokuapp.com/" target="_blank" rel="noreferrer">
          TallTalk
      <img src={questions} alt="TallTalk project preview" />
        </a>

      <p>A bit about Tall Talk</p>
      
      </h1>
    </div>
  );
}

export default TallTalk;
