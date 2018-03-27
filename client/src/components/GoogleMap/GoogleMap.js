import React, { Component }from "react";
import MedicalServices from '../MedicalServices';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GoogleApiWrapper } from 'google-maps-react'
import "./GoogleMap.css";


class GoogleMap extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1> // title
// MOST IMPORTANT: Here we are passing the Google Maps props down to the MapContainer component as 'google'.
        <MedicalServices google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper ({
    apiKey: 'AIzaSyDuKj7l762Y5ulcwj_EyANIvHx6rfffceY',
})(GoogleMap)
