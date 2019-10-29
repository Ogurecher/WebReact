import React, { Component } from "react";

export default class WeatherIcon extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <img src={`http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@2x.png`}/>
        );
    }
}