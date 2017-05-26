"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const Actions = require("./actions");
const Homepage_1 = require("./containers/Homepage");
const reducers_1 = require("./reducers");
const store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(Actions.getRecent());
unsubscribe();
const mount = document.querySelector("#app");
if (mount !== null) {
    ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(Homepage_1.Homepage, null)), mount);
}
else {
    console.error(`#app not found in document`);
}
//# sourceMappingURL=index.js.map