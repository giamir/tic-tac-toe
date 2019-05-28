import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Game = lazy(() => import('./Game'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <main className="App">
      <h1>Tic Tac Toe</h1>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Game} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
