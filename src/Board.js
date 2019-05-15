import React from 'react';
import PropTypes from 'prop-types';
import Square from "./Square";
import './Board.css';

function Board({ squares, onClick }) {
  const renderSquare = (idx, label) => (
    <Square
      onClick={onClick(idx)}
      value={squares[idx]}
      label={label}
    />
  );

  return (
    <div className="Board" aria-label="tic tac toe game board">
      <div className="Row" aria-label="first row">
        {renderSquare(0, 'first square')}
        {renderSquare(1, 'second square')}
        {renderSquare(2, 'third square')}
      </div>
      <div className="Row" aria-label="second row">
        {renderSquare(3, 'first square')}
        {renderSquare(4, 'second square')}
        {renderSquare(5, 'third square')}
      </div>
      <div className="Row" aria-label="third row">
        {renderSquare(6, 'first square')}
        {renderSquare(7, 'second square')}
        {renderSquare(8, 'third square')}
      </div>
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

Board.defaultProps = {
  squares: Array(9).fill(''),
  onClick: () => {}
}

export default Board;
