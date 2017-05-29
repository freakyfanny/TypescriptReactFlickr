import { combineReducers, Reducer } from 'redux';
import { FlickrImage } from '../components/FlickrImage';
import { GET_RECENT, getRecent, SET_PHOTOS} from "../actions";

const initialState = {
    photos: []
};

const initAction = {
    type: GET_RECENT,
    payload: getRecent()
}

function flickrGallery(state = [], action: any ) {
    switch (action.type) {
        case SET_PHOTOS: {
            console.log('in reducer ');
            console.log(action.payload);

        //return state.concat([action.payload.data]); //es5
        return [ action.payload.data, ...state ]; //es6
    }
        /*return Object.assign({}, state, {
            photos: [
                ...state.photos,
                action.payload,
            ],
        });
    }*/
        default:
            return state;
    }
}

//A reducer is a function that returns a piece of applications state, there can be many different reducers to reuturn different pieces of the apps state.
export const rootReducer = combineReducers({
  photos: flickrGallery
});
