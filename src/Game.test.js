import React from 'react';
import { render } from 'react-testing-library';
import Game from './Game';

describe('<Game />', () => {
  it('renders tic tac toe title', () => {
    const { getByText } = render(<Game />);
    expect(getByText('Tic Tac Toe')).toBeInTheDocument();
  });
});
