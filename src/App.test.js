import React from 'react'
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  it('renders tic tac toe title', () => {
    const { getByText } = render(<App/>);
    expect(getByText('Tic Tac Toe')).toBeInTheDocument();

    // lazy loading (fetching the chunk for rendering the rest of the page)
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the about page when the user click on the about link', async () => {
    const { findByText } = render(<App/>);
    const aboutLink = await findByText('About');

    fireEvent.click(aboutLink);

    const aboutPageText = await findByText(/Tic-tac-toe \(American English\)/);
    expect(aboutPageText).toBeInTheDocument();
  });

  it('should go back to the game page when user click the link', async () => {
    // starting the app from /about url
    window.history.pushState({}, 'About', '/about');

    const { findByText, findByLabelText } = render(<App/>);
    const toTheGameLink = await findByText('To the game');

    fireEvent.click(toTheGameLink);

    const boardGame = await findByLabelText('tic tac toe game board');
    expect(boardGame).toBeInTheDocument();
  });
});

