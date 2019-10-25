import React, { Component } from "react";
import CityLabel from "./CityLabel.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherList from "./WeatherList.js";
import { getWeather } from "../actions/index";
import { connect } from "react-redux";
import { LOADING_GIF_URL } from "../constants/resources.js"

export class CityInfo extends Component {

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.position) !== JSON.stringify(prevProps.position)) {
            console.log('CityInfo updated');
            console.log(prevProps);
            console.log(this.props);
            this.props.getWeather(this.props.position);
        }
    }
    
    /*renderError(msg) {
        ReactDOM.render(
        <p>{msg}</p>
        ,
        document.getElementById('weather'));
    }*/

    render() {
        if (this.props.weather && this.props.loading === 0) {
            return (
                <div>
                    <CityLabel />
                    <WeatherIcon />
                    <WeatherList />
                </div>
            );
        } else if (this.props.loading === 1) {
            return (
                <div>
                    <p> LOADING... </p>
                    <img src={LOADING_GIF_URL} />
                </div>
            );
        } else {
            return(<div />);
        }
    }
}

function mapStateToProps(state) {
    return {
      position: state.position,
      weather: state.weather,
      loading: state.loading
    };
}

export default connect(
    mapStateToProps,
    { getWeather }
  )(CityInfo);