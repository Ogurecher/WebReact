import React, { Component } from "react";
import GeolocationButton from "./GeolocationButton.js"
import InputForm from "./InputForm.js"
import Favourites from "./Favourites.js";
import CityInfo from './CityInfo';
import { connect } from "react-redux";
import { getWeather } from "../actions/index";

export class App extends Component {

  componentDidMount() {
    //add getweather for all cities
    for (let i = 0; i < this.props.cities.length; i++) {
      this.props.getWeather(this.props.cities[i].position, i);
    }
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.position) !== JSON.stringify(prevProps.position)) {
      this.props.getWeather(this.props.position, null);
    }
    //add getweather for all cities
    for (let i = 0; i < this.props.cities.length; i++) {
      if (!prevProps.cities[i] || JSON.stringify(this.props.cities[i].weather) !== JSON.stringify(prevProps.cities[i].weather)) {  //may cause problems if cities[i] does not exist in prevprops
        this.props.getWeather(this.props.cities[i].position, i);
      }
    }
  }

  render() {
    return (
      <div>
        <GeolocationButton />
        <CityInfo city={{weather: this.props.weather, loading: this.props.loading, errorMsg: this.props.errorMsg}} />
        <InputForm />
        <Favourites cities={this.props.cities} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    position: state.position,
    weather: state.weather,
    loading: state.loading,
    errorMsg: state.errorMsg,
    cities: state.cities
  };
}

export default connect(
  mapStateToProps,
  { getWeather }
)(App);