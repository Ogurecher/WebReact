import {ADD_WEATHER} from "../constants/action-types";

const initialState = {
    weather:[]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_WEATHER) {
        return Object.assign({}, state, {
            weather: state.weather.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;