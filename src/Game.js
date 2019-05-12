import React from 'react';
import Square from './Square';
import './Game.css';

function Game() {
  return (
    <main className="Game">
      <h1>Tic Tac Toe</h1>
      <Square />
    </main>
  );
}

export default Game;
