import React from 'react';
import ItemDetails from "../item-details";
import Record from "../item-details/record";
import {withSwapiService} from "../hoc-helpers";

const PersonDetails = (props) => {

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
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);