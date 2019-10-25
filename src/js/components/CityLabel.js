import React, { Component } from "react";
import { connect } from "react-redux";

export class CityLabel extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            //{this.props.city}
            <p>
                {this.props.weather.name}
            </p>
        );
    }
}

function mapStateToProps(state) {
    return {
      weather: state.weather
    };
}

export default connect(mapStateToProps)(CityLabel);