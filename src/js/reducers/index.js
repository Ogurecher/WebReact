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

    /*let favourites;                                                 //NOT IN REDUCER in subscriber? use redux-persist?
    if (localStorage.getItem('favourites')) {                       //disallow repetitions
      favourites = localStorage.getItem('favourites').split(',');
      favourites.push([action.payload]);
    } else {
      favourites = action.payload;
    }
    localStorage.setItem('favourites', favourites);*/

    return Object.assign({}, state, {
      favourites: state.favourites.concat([action.payload])
    });
  }

  return state;
}

export default rootReducer;