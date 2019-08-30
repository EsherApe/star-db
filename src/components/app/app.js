import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";

import './app.css';
import ErrorBoundary from "../error-boundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Header/>
        <RandomPlanet/>
        <PeoplePage/>
      </ErrorBoundary>
    );
  }
}

export default App;