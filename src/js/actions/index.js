import { LOAD_WEATHER, SET_LOCATION, LOADING, THROW_ERROR, ADD_TO_FAVOURITES } from '../constants/action-types';
import { API_BASE_URL } from '../constants/resources';

export function getLocation() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ type: SET_LOCATION, payload: {city: null, lat: position.coords.latitude, lng: position.coords.longitude}});
      }, (e) => {
        const defaultCity = prompt('Enter default city');
        dispatch({ type: SET_LOCATION, payload: {city: defaultCity, lat: null, lng: null}});
      });
  }
}

export function getWeather(position) {
    return function(dispatch) {
      dispatch({ type: LOADING, payload: 1 });
      let url;
      if (position.city) {
        url = API_BASE_URL + '&q=' + position.city;
      } else {
        url = API_BASE_URL + '&lat=' + position.lat + '&lon=' + position.lng;
      }
      return fetch(url)
          .then(response => {
            if (!response.ok){
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then(json => {
            dispatch({ type: LOAD_WEATHER, payload: json });
          })
          .catch(error => {
            console.log("ERROR!!!!!");
            dispatch({ type: THROW_ERROR, payload: 'Location not found' });
          });
    };
}

export function addToFavourites(city) {
  return {type: ADD_TO_FAVOURITES, payload: city};
}