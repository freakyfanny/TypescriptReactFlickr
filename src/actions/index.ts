import axios from 'axios';
import * as Redux from 'redux';

//const variables for flickrApi
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'getrecent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';


/** action cretors */
export const SET_PHOTOS: string = "SET_PHOTOS";
export function setPhotos(request: string) {
    console.log(axios.get(request));
    return {
        type: SET_PHOTOS,
        payload: axios.get(request)
    };
}

export function getRecent() {
    return <T>(dispatch: Redux.Dispatch<T>) => {
        return dispatch(setPhotos(ROOT_URL + RECENT + API_KEY + FORMAT));
    };
}
