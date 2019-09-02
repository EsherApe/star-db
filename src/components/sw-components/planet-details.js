import React from 'react';
import ItemDetails from "../item-details";
import Record from "../item-details/record";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='Gender'/>
      <Record field='eyeColor' label='Eye Color'/>
      <Record field='birthYear' label='Birth year'/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}


export default withSwapiService(PlanetDetails, mapMethodsToProps);