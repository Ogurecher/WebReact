import React, { Component } from 'react';

export default class WeatherListItem extends Component {

    render() {
        return (
            <div className='city-info-weather-list-item'>
                <p> {this.props.label} </p>
                <p> {this.props.content} </p>
            </div>
            
        );
    }
}