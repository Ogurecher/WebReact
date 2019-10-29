import React, { Component } from "react";

export default class CityLabel extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <p>
                {this.props.weather.name}
            </p>
        );
    }
}
