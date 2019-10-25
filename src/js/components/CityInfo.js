import React, { Component } from "react";
import CityLabel from "./CityLabel.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherList from "./WeatherList.js";
import { getWeather } from "../actions/index";
import { connect } from "react-redux";

export class CityInfo extends Component {

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
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
        if (this.props.weather) {
            return (
                <div>
                    <CityLabel />
                    <WeatherIcon />
                    <WeatherList />
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
      weather: state.weather
    };
}

export default connect(
    mapStateToProps,
    { getWeather }
  )(CityInfo);