import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

function Square({ value, onClick, label }) {
  const isClickable = !value;

  const onClickHandler = () => {
    if (isClickable) {
      onClick();
    }
  };

  const squareStatus = isClickable ? 'empty' : `filled by player ${value}`;

  return (
    <button
      className="Square"
      onClick={onClickHandler}
      aria-label={`${label} ${squareStatus}`}
      disabled={!isClickable}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
}

Square.defaultProps = {
  value: '',
  onClick: () => {},
  label: ''
}


export default Square;
