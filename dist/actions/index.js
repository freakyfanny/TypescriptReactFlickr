"use strict";
const axios_1 = require("axios");
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'getrecent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';
exports.SET_PHOTOS = "SET_PHOTOS";
function setPhotos(request) {
    console.log(axios_1.default.get(request));
    return {
        type: exports.SET_PHOTOS,
        payload: axios_1.default.get(request)
    };
}
exports.setPhotos = setPhotos;
function getRecent() {
    return (dispatch) => {
        return dispatch(setPhotos(ROOT_URL + RECENT + API_KEY + FORMAT));
    };
}
exports.getRecent = getRecent;
//# sourceMappingURL=index.js.map