import * as React from "react";
import * as ReactDOM from "react-dom";

import { Store, createStore } from 'redux';

import { Gallery } from "./components/Gallery";
import { Hello  } from "./components/Hello";
import { FlickrPhotos } from "./components/FlickrPhotos";
import { rootReducer } from './reducers/index';

const initialState = {};
const store: Store<any> = createStore(rootReducer, initialState);

ReactDOM.render(
    <Gallery welcome="Typescript and React gallery" photo={null} />,
    document.getElementById("example")
);
