import React, { Component } from "react";
import WeatherListItem from "./WeatherListItem.js"

export default class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><WeatherListItem items={[this.props.weather.weather[0].main, `; ${this.props.weather.main.temp}C`]} /></li>
                <li><WeatherListItem items={[`Wind direction: ${this.props.weather.wind.deg}deg`, `; Wind speed: ${this.props.weather.wind.speed} m/s`]} /></li>
                <li><WeatherListItem items={[`Pressure: ${this.props.weather.main.pressure} hpa`]} /></li>
                <li><WeatherListItem items={[`Humidity: ${this.props.weather.main.humidity}% `]} /></li>
                <li><WeatherListItem items={[`Latitude: ${this.props.weather.coord.lat}`, `; Longitude: ${this.props.weather.coord.lon}`]} /></li>
            </ul>
        );
    }
}