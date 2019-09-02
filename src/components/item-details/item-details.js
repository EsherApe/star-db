import React, {Component} from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const {itemId, getData, getImageUrl} = this.props;
    if (itemId !== prevProps.itemId ||
        getData !== prevProps.getData ||
        getImageUrl !== prevProps.getImageUrl) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item)
        });
      })
  }

  render() {
    const {item, image} = this.state;
    const {children} = this.props;
    if (!item) {
      return <span>select item</span>
    }

    return (
      <div className="person-details card">
        <img className="person-image"
             src={image}/>

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, child => {
                return React.cloneElement(child, {item})
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
