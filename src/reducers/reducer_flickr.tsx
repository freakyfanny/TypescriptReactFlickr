import { combineReducers, Reducer } from 'redux';
import { OtherAction, OTHER_ACTION, GetRecentAction, GET_RECENT, OTHER_ACTION_TYPE, GET_RECENT_TYPE } from '../constants/index';
import { fromJS } from 'immutable';

//Declaration of all action types
type FlickrAction =
    GetRecentAction |
    OtherAction

const INITIAL_STATE = fromJS({
  photo : null,
});

function FlickrReducer(state = INITIAL_STATE, action : FlickrAction ) {
    switch(action.type) {
        case GET_RECENT:
            return state.with({photo: action.payload});
        default: return state;
    }
}

export default FlickrReducer;

/*function taht return an array of books
export function PhotoReducer () : [any] { //make sure that it can be used in the application
    return [
        {title: 'Javscript: The Good Parts', pages: 101 },
        {title: 'Harry Potter', pages: 39 },
        {title: 'The Dark Tower', pages: 85 },
        {title: 'Eloquent Ruby', pages: 1 }
    ];
}*/
//time to wire it in to the application
//in index.js


/*/ State argument is not application state, only the state
// this reducer is responsible for
export function PhotosReducer(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
*/
