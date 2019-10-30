import React, { Component } from "react";
import CityLabel from "./CityLabel.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherList from "./WeatherList.js";
/*import { getWeather } from "../actions/index";
import { connect } from "react-redux";*/
import { LOADING_GIF_URL } from "../constants/resources.js"
import CloseButton from "./CloseButton.js";

export default class CityInfo extends Component {

    constructor(props) {
        super(props);

        this.renderError = this.renderError.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
    }

    /*componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.position) !== JSON.stringify(prevProps.position)) {
            this.props.getWeather(this.props.position);
        }
    }*/
    
    renderError(msg) {
        return (
            <div>
                <p> {msg} </p>
                <CloseButton city={this.props.city} />
            </div>
        );
    }

    renderInfo() {
        return (
            <div>
                <CityLabel weather={this.props.city.weather} />
                <WeatherIcon weather={this.props.city.weather} />
                <CloseButton city={this.props.city} />
                <WeatherList weather={this.props.city.weather} />
            </div>
        );
    }

    renderLoading() {
        return (
            <div>
                <p> LOADING... </p>
                <img src={LOADING_GIF_URL} />
            </div>
        );
    }

    render() {
        if (this.props.city.errorMsg) {
            return this.renderError(this.props.city.errorMsg);
        } else if (this.props.city.weather && this.props.city.loading === 0) {
            return this.renderInfo();
        } else if (this.props.city.loading === 1) {
            return this.renderLoading();
        } else {
            return(<p>No CityInfo</p>);                 //REMOVE DEBUG MSG
        }
    }
}