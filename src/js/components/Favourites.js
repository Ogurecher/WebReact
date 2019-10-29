import React, { Component } from "react";
import { CityInfo } from "./CityInfo";
import { connect } from "react-redux";

export class Favourites extends Component {
    
    render() {
        const favourites = this.props.favourites.map((element) =>               //disallow dupes
            <div key={element.toString()}>
                <CityInfo position={{city: element, lat: null, lng: null}}/>
            </div>
        );
        return (
            <div>
                {favourites}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favourites: state.favourites
    };
}

export default connect(
    mapStateToProps
  )(Favourites);