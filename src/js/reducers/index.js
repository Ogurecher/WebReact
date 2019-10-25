import { ADD_ARTICLE, LOAD_WEATHER, SET_LOCATION } from "../constants/action-types";

const initialState = {
  articles: [],
  weather: null,
  position: {city: null, lat: null, lng: null},
  loading: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === LOAD_WEATHER) {
    return Object.assign({}, state, {
      weather: action.payload,
      loading: 0
    });
  }

  if (action.type === SET_LOCATION) {
    return Object.assign({}, state, {
      position: action.payload
    });
  }

  if (action.type === 'LOADING') {
    return Object.assign({}, state, {
      loading: action.payload
    });
  }

  return state;
}

export default rootReducer;