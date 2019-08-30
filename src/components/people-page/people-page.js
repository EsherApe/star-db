import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import Record from '../item-details/record'

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
    const {getPerson, getPersonImage} = this.swapiService;

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
        <ItemDetails itemId={this.state.selectedPerson}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
          <Record field='gender' label='Gender'/>
          <Record field='eyeColor' label='Eye Color'/>
          <Record field='birthYear' label='Birth year'/>
        </ItemDetails>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

export default PeoplePage;