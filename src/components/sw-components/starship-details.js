import React from 'react';
import ItemDetails from "../item-details";
import Record from "../item-details/record";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Model'/>
      <Record field='manufacturer' label='Manufacturer'/>
      <Record field='crew' label='Crew'/>
    </ItemDetails>
  )

};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);