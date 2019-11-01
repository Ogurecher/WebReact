import React, { Component } from 'react';
import CityInfo from '../CityInfo/CityInfo';
import './Favourites.css';

export default class Favourites extends Component {
    
    render() {
        const cities = this.props.cities.map((element) =>
                <CityInfo key={element.position.city.toString()} city={element} />
        );
        return (
            <div className='favourites-cities-wrapper'>
                {cities}
            </div>
        );
    }
}