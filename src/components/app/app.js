import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";

import './app.css';
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div>
        <Header/>
        <RandomPlanet/>
        <PeoplePage/>
        <div className="col-12">
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList getData={this.swapiService.getAllPlanets}
                        onItemSelected={this.onPersonSelected}
                        renderItem={item => item.name}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList getData={this.swapiService.getAllStarships}
                        onItemSelected={this.onPersonSelected}
                        renderItem={item => item.name}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;