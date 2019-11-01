import React, { Component } from 'react';
import CityInfo from '../CityInfo/CityInfo';
import './Favourites.css';

export default class Favourites extends Component {
    
    render() {
        const cities = this.props.cities.map((element, index) => {
            if (this.props.favourites.includes(element.position.city.toString())) {
                return (<CityInfo key={index} city={element} />);
            }
            return null;
        }
                
        );
        return (
            <div className='favourites-cities-wrapper'>
                {cities}
            </div>
        );
    }
}