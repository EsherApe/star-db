import React, {Component} from 'react';
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from "../sw-components";

class PeoplePage extends Component {
  state = {
    selectedPerson: 3
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  };

  render() {
    const itemList = (
      <ErrorBoundary>
        <PersonList/>
      </ErrorBoundary>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails itemId={11}/>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

export default PeoplePage;