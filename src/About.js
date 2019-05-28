import React from 'react';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <p>Tic-tac-toe (American English), noughts and crosses (British English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
      <Link to="/">To the game</Link>
    </div>
  );
}

export default About;
