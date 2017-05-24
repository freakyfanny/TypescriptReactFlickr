import axios from 'axios';
import {
    GetRecentAction,
    OtherAction,
    GET_RECENT,
    OTHER_ACTION
} from '../constants';

//const variables for flickrApi
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'recent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';

//get recent function returns the recent photos from flickrApi
export function getRecent() : GetRecentAction {
    let request = axios.get(ROOT_URL + RECENT + API_KEY + FORMAT);

    return {
        type: GET_RECENT,
        payload: request
    };
}

export function otherAction() : OtherAction {
    return {
        type: OTHER_ACTION,
        payload: null
    }
}

/*
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}*/
