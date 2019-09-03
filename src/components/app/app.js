import React, {Component} from 'react';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from "../error-boundary";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
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
    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="col-12">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Switch>
                <Route path='/'
                       render={() => <h2 className='text-center mt-3'>Welcome to StarDB</h2>}
                       exact/>
                <Route path='/people/:id?' component={PeoplePage}/>
                <Route path='/planets/' component={PlanetsPage}/>
                <Route path='/starships/' exact component={StarshipsPage}/>
                <Route path='/starships/:id'
                       render={({match: {params}}) => <StarshipDetails itemId={params.id}/>}/>
                <Route
                  path='/login'
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}/>
                <Route
                  path='/secret'
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn}/>
                  )}/>
                <Route render={() => <h2 className='text-center mt-3'>Page not found!</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;