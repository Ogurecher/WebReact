import React, { Component } from "react";
import CityLabel from "./CityLabel.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherList from "./WeatherList.js";
import { getWeather } from "../actions/index";
import { connect } from "react-redux";
import { LOADING_GIF_URL } from "../constants/resources.js"

export class CityInfo extends Component {

    constructor(props) {
        super(props);

        this.renderError = this.renderError.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.position) !== JSON.stringify(prevProps.position)) {
            console.log('CityInfo updated');
            console.log(prevProps);
            console.log(this.props);
            this.props.getWeather(this.props.position);
        }
    }
    
    renderError(msg) {
        return (
            <p> {msg} </p>
        );
    }

    renderInfo() {
        return (
            <div>
                <CityLabel weather={this.props.weather} />
                <WeatherIcon weather={this.props.weather} />
                <WeatherList weather={this.props.weather} />
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
        if (this.props.errorMsg) {
            return this.renderError(this.props.errorMsg);
        } else if (this.props.weather && this.props.loading === 0) {
            return this.renderInfo();
        } else if (this.props.loading === 1) {
            return this.renderLoading();
        } else {
            return(<p>No CityInfo</p>);                 //REMOVE DEBUG MSG
        }
    }
}

function mapStateToProps(state) {
    return {
      weather: state.weather,
      loading: state.loading,
      errorMsg: state.errorMsg
    };
}

export default connect(
    mapStateToProps,
    { getWeather }
  )(CityInfo);