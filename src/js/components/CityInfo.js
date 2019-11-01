import React, { Component } from 'react';
import CityLabel from './CityLabel.js';
import WeatherIcon from './WeatherIcon.js';
import WeatherList from './WeatherList.js';
import { LOADING_GIF_URL } from '../constants/resources.js'
import CloseButton from './CloseButton.js';
import Temperature from './Temperature.js';

export default class CityInfo extends Component {

    constructor(props) {
        super(props);

        this.renderError = this.renderError.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
    }
    
    renderError(msg) {
        return (
            <div className='city-info-error'>
                <p> {msg} </p>
                    <CloseButton city={this.props.city} />
            </div>
        );
    }

    renderInfo() {
        return (
            <div id={this.props.id} className='city-info'>
                <div className='city-info-head'>
                    <CityLabel weather={this.props.city.weather} />
                    <WeatherIcon weather={this.props.city.weather} />
                    <Temperature weather={this.props.city.weather} />
                    <CloseButton city={this.props.city} />
                </div>
                <WeatherList weather={this.props.city.weather} />
            </div>
        );
    }

    renderLoading() {
        return (
            <div className='city-info-loading'>
                <p> Loading, please wait... </p>
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
            return(<p></p>);
        }
    }
}