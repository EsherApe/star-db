import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";

import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const {getData} = this.props;
    getData().then(itemList => {
        this.setState({itemList});
      })
  }

  renderItems(arr) {
    const {onItemSelected, renderItem} = this.props;
    return arr.map(item => {
      const {id} = item;
      const label = renderItem(item);

      return (
        <li className='list-group-item'
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      )
    })
  }

  render() {
    const {itemList} = this.state;
    if (!itemList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
