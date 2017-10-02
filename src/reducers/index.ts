import { combineReducers, Reducer } from 'redux';
import { FlickrImage } from '../components/FlickrImage';
import { GET_RECENT, getRecent, SET_PHOTOS} from '../actions';

export interface ActionType {
   type: string;
   payload: { data: {} };
}

const initialState = {
    photos: []
};

const initAction = {
    type: GET_RECENT,
    payload: getRecent()
};

function flickrGallery(state: Array<{}> = [] , action: ActionType ) {
    switch (action.type) {
        case SET_PHOTOS: {
        
        // es5
        // return state.concat([action.payload.data]); 
        return [ action.payload.data, ...state ]; // es6
    }
        default:
            return state;
    }
}

/** A reducer is a function that returns a piece of applications state,
 * there can be many different reducers to reuturn different pieces of the apps state.
 */
export const rootReducer = combineReducers({
  photos: flickrGallery
});
