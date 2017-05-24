"use strict";
const axios_1 = require("axios");
const constants_1 = require("../constants");
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'recent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';
function getRecent() {
    let request = axios_1.default.get(ROOT_URL + RECENT + API_KEY + FORMAT);
    return {
        type: constants_1.GET_RECENT,
        payload: request
    };
}
exports.getRecent = getRecent;
function otherAction() {
    return {
        type: constants_1.OTHER_ACTION,
        payload: null
    };
}
exports.otherAction = otherAction;
//# sourceMappingURL=index.js.map