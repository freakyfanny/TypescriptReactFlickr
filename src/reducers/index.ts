import { combineReducers, Reducer } from 'redux';
import { FlickrImage } from '../components/FlickrImage';
import { SET_PHOTOS } from "../actions";

const initialState = {
    photos: []
};

function flickrGallery(state = initialState, action: any) {
    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photos: action.payload.data };

        default:
            return state;
    }
}

//A reducer is a function that returns a piece of applications state, there can be many different reducers to reuturn different pieces of the apps state.
export const rootReducer = combineReducers({
  flickrGallery
});
