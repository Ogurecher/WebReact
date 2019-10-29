import React, { Component } from "react";
import CityInfo from "./CityInfo";

export default class Favourites extends Component {
    
    render() {
        const cities = this.props.cities.map((element) =>               //disallow dupes
            <div key={element.position.city.toString()}>
                <CityInfo city={element} />
            </div>
        );
        return (
            <div>
                {cities}
            </div>
        );
    }
}