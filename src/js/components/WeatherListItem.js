import React, { Component } from "react";

export default class WeatherListItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <p>
                {this.props.items}
            </p>
        );
    }
}