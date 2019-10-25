import { ADD_ARTICLE, LOAD_WEATHER, SET_LOCATION } from "../constants/action-types";
import { API_BASE_URL } from "../constants/api";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

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
      if (position.city) {
        return fetch(API_BASE_URL + "&q=" + position.city)
          .then(response => response.json())
          .then(json => {
            //const payload = json.weather.main;
            dispatch({ type: LOAD_WEATHER, payload: json });
          });
      } else {
        return fetch(API_BASE_URL + "&lat=" + position.lat + "&lon=" + position.lng)
          .then(response => response.json())
          .then(json => {
            //const payload = json.weather.main;
            dispatch({ type: LOAD_WEATHER, payload: json });
          });
      }
    };
}