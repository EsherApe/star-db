import React, {Component} from 'react';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";

import './app.css';
import ErrorBoundary from "../error-boundary";

class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    })
  };

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet/>
          <PeoplePage/>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;