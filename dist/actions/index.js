"use strict";
const axios_1 = require("axios");
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'getrecent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';
exports.SET_PHOTOS = "SET_PHOTOS";
function setPhotos(request) {
    const req = axios_1.default.get(request);
    console.log("in setphotos ");
    console.log(req);
    return {
        type: exports.SET_PHOTOS,
        payload: req
    };
}
exports.setPhotos = setPhotos;
exports.GET_RECENT = "GET_RECENT";
function getRecent() {
    return (dispatch) => {
        axios_1.default.get(ROOT_URL + RECENT + API_KEY + FORMAT)
            .then(response => dispatch({ payload: response.data, type: exports.SET_PHOTOS }));
    };
}
exports.getRecent = getRecent;
//# sourceMappingURL=index.js.map