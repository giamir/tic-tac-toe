import React, { useState } from 'react';
import calculateWinner from "./core/gameEngine";
import Board from "./core/Board";
import './Game.css';
import { Link } from "react-router-dom"

const PLAYERS = [ 'o', 'x' ];
const noop = () => {};
const nextTurn = turn => (turn + 1) % PLAYERS.length;
const arrayOf = (length, value) => Array(length).fill(value);

function Game() {
  const [squares, setSquares] = useState(arrayOf(9, ''));
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  const onClickHandler = idx => () => {
    const player = PLAYERS[turn];
    const newSquares = squares.map((value, i) => idx === i ? player : value);
    setTurn(nextTurn(turn));
    setSquares(newSquares);
    setWinner(calculateWinner(newSquares));
  }

  const resetGame = () => {
    setSquares(arrayOf(9, ''));
    setWinner(null);
    setTurn(0);
  }

  const renderInfo = () => {
    return winner
      ? <p>The Winner is: <strong>player {winner}</strong></p>
      : <p>Next player: <strong>{PLAYERS[turn]}</strong></p>;
  }

  return (
    <>
      <div className="Game">
        <Board
          squares={squares}
          onClick={winner ? noop : onClickHandler}
        />
        {renderInfo()}
        <button onClick={resetGame}>Restart the game</button>
      </div>
      <Link to="/about">About</Link>
    </>
  );
}

export default Game;
