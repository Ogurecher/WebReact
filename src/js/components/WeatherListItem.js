import React, { Component } from "react";

export default class WeatherListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {value: 'WeatherListItem'};
    }
    
    render() {
        return (
            <p>
                {this.props.items}
            </p>
        );
    }
}