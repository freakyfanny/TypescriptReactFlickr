import { combineReducers } from 'redux';
import FlickrReducer from './reducer_flickr';

//A reducer is a function that returns a piece of applications state, there can be many different reducers to reuturn different pieces of the apps state.
export const rootReducer = combineReducers({
  photo: FlickrReducer
});
