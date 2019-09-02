import React, {Component} from 'react';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";

import './app.css';
import ErrorBoundary from "../error-boundary";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Header/>
          <RandomPlanet/>
          <PeoplePage/>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;