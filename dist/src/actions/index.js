"use strict";
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search&api_';
const RECENT = 'getrecent&api_';
const API_KEY = 'key=158f9fda1dd419dc28f2855346f605a3';
const FORMAT = '&format=json&nojsoncallback=1';
exports.SET_RECENT = "SET_RECENT";
function setRecent(result) {
    return {
        type: result.type,
        payload: result.payload
    };
}
exports.setRecent = setRecent;
function getRecent() {
    return React.createElement(T, null,
        "(dispatch: Redux.Dispatch",
        React.createElement(T, null,
            ") => ",
        ,
            " axios.get(ROOT_URL + RECENT + API_KEY + FORMAT).then((response) => ",
        ,
            " response.json();" + " " + "}).then((json: Response) => ",
        ,
            " recent : IResponseResult = ",
            type,
            " SET_RECENT," + " " + "payload: axios.get(ROOT_URL + RECENT + API_KEY + FORMAT).json()," + " " + "};" + " " + "return dispatch(setRecent(recent));" + " " + "});" + " " + "};" + " " + "}"));
}
exports.getRecent = getRecent;
//# sourceMappingURL=index.js.map