import React, { Component } from "react";
import { CityInfo } from "./CityInfo";

export default class Favourites extends Component {
    
    render() {
        let favourites;
        if (localStorage.getItem('favourites')) {
            favourites = localStorage.getItem('favourites').split(',').map((element) =>               //update component on localstorage update
                <div key={element.toString()}>
                    <CityInfo />
                </div>
            );
        }
        return (
            <div>
                {favourites}
            </div>
        );
    }
}