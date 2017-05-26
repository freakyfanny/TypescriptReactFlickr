"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const redux_1 = require("redux");
const actions_1 = require("../actions");
const initialState = {
    photos: []
};
function flickrGallery(state = initialState, action) {
    switch (action.type) {
        case actions_1.SET_PHOTOS:
            return __assign({}, state, { photos: action.payload.data });
        default:
            return state;
    }
}
exports.rootReducer = redux_1.combineReducers({
    flickrGallery
});
//# sourceMappingURL=index.js.map