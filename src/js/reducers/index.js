import { LOAD_WEATHER, SET_LOCATION, LOADING, THROW_ERROR, ADD_TO_FAVOURITES } from "../constants/action-types";

const initialState = {
  articles: [],
  weather: null,
  position: {city: null, lat: null, lng: null},
  loading: 0,
  errorMsg: null,
  favourites: []
};

function rootReducer(state = initialState, action) {

  if (action.type === LOAD_WEATHER) {
    return Object.assign({}, state, {
      weather: action.payload,
      loading: 0,
      errorMsg: null
    });
  }

  if (action.type === SET_LOCATION) {
    return Object.assign({}, state, {
      position: action.payload
    });
  }

  if (action.type === LOADING) {
    return Object.assign({}, state, {
      loading: action.payload
    });
  }

  if (action.type === THROW_ERROR) {
    return Object.assign({}, state, {
      errorMsg: action.payload,
      loading: 0
    });
  }

  if (action.type === ADD_TO_FAVOURITES) {
    return Object.assign({}, state, {
      favourites: state.favourites.concat([action.payload])
    });
  }

  return state;
}

export default rootReducer;