import { LOAD_WEATHER, SET_LOCATION, LOADING, THROW_ERROR, ADD_TO_FAVOURITES } from "../constants/action-types";

const initialState = {
  weather: null,
  position: {city: null, lat: null, lng: null},
  loading: 0,
  errorMsg: null,
  favourites: [],
  cities: []
};

function rootReducer(state = initialState, action) {

  if (action.type === LOAD_WEATHER) {
    if (action.index) {
      const cities = state.cities;
      cities[action.index] = {
        position: state.cities[action.index].position,
        weather: action.payload,
        loading: 0,
        errorMsg: null
      }
      return Object.assign({}, state, {
        cities: cities
      });
    }

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

  if (action.type === LOADING) {                       //deal with code copying
    if (action.index) {
      const cities = state.cities;
      cities[action.index] = {
        position: state.cities[action.index].position,
        weather: state.cities[action.index].weather,
        loading: action.payload,
        errorMsg: state.cities[action.index].errorMsg
      }
      return Object.assign({}, state, {
        cities: cities
      });
    }

    return Object.assign({}, state, {
      loading: action.payload
    });
  }

  if (action.type === THROW_ERROR) {                       //deal with code copying

    if (action.index) {
      const cities = state.cities;
      cities[action.index] = {
        position: state.cities[action.index].position,
        weather: state.cities[action.index].weather,
        loading: 0,
        errorMsg: action.payload
      }
      return Object.assign({}, state, {
        cities: cities
      });
    }

    return Object.assign({}, state, {
      errorMsg: action.payload,
      loading: 0
    });
  }

  if (action.type === ADD_TO_FAVOURITES) {

    /*let favourites;                                                 //NOT IN REDUCER in subscriber? use redux-persist?
    if (localStorage.getItem('favourites')) {                       //disallow repetitions
      favourites = localStorage.getItem('favourites').split(',');
      favourites.push([action.payload]);
    } else {
      favourites = action.payload;
    }
    localStorage.setItem('favourites', favourites);*/

    return Object.assign({}, state, {
      favourites: state.favourites.concat([action.payload]),
      cities: state.cities.concat({position: {city: action.payload, lat: null, lng: null}, weather: null, loading: 0, errorMsg: null })
    });
  }

  return state;
}

export default rootReducer;