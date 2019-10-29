import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/index";
import CityInfo from "./CityInfo.js"

export class GeolocationButton extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getLocation();
    }

    componentDidMount() {
        this.props.getLocation();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' value = 'Get location'/>
                </form>
                <CityInfo position={this.props.position} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        position: state.position
    };
}

export default connect(
    mapStateToProps,
    { getLocation }
  )(GeolocationButton);