"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const redux_1 = require("redux");
const Gallery_1 = require("./components/Gallery");
const index_1 = require("./reducers/index");
const initialState = {};
const store = redux_1.createStore(index_1.rootReducer, initialState);
ReactDOM.render(React.createElement(Gallery_1.Gallery, { welcome: "Typescript and React gallery", photo: null }), document.getElementById("example"));
//# sourceMappingURL=index.js.map