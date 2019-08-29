import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="col-12">
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;