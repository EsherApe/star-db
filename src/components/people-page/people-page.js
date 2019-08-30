import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

class PeoplePage extends Component {
  swapiService = new SwapiService();

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
        <ItemList getData={this.swapiService.getAllPeople}
                  onItemSelected={this.onPersonSelected}>
          {(i) => (`${i.name}, (${i.birthYear})`)}
        </ItemList>
      </ErrorBoundary>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson}/>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

export default PeoplePage;