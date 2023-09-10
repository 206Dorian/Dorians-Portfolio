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

        <h6> Tall Talk is a random question generator to help you get to know people or get the party started! New questions diplayed daily plus a database full to help you get to know someone beyond basic small talk. </h6>

      </h1>
    </div>
  );
}

export default TallTalk;
