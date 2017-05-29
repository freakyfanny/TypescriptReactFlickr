"use strict";
const redux_1 = require("redux");
const actions_1 = require("../actions");
const initialState = {
    photos: []
};
const initAction = {
    type: actions_1.GET_RECENT,
    payload: actions_1.getRecent()
};
function flickrGallery(state = [], action) {
    switch (action.type) {
        case actions_1.GET_RECENT: {
            console.log('in reducer ');
            console.log(action.payload);
            return [action.payload.data, ...state];
        }
        default:
            return state;
    }
}
exports.rootReducer = redux_1.combineReducers({
    photos: flickrGallery
});
//# sourceMappingURL=index.js.map