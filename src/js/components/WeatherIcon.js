import React, { Component } from "react";
import { connect } from "react-redux";

export class WeatherIcon extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <img src={`http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@2x.png`}/>
        );
    }
}

function mapStateToProps(state) {
    return {
      weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherIcon);