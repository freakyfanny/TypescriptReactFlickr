"use strict";
const actions_1 = require("../actions");
const initialState = {
    photos: []
};
function flickrGallery(state = initialState, action) {
    switch (action.type) {
        case actions_1.SET_RECENT:
            return Object.assign({}, state, {
                photos: [
                    ...state.photos,
                    action.payload.data,
                ],
            });
        default:
            return state;
    }
}
exports.flickrGallery = flickrGallery;
//# sourceMappingURL=reducer_flickr.js.map