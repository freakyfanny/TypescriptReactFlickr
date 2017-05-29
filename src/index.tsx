import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import * as Actions from "./actions";
import { Homepage } from "./containers/Homepage";
import { rootReducer } from "./reducers";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
// Log the initial state
console.log("Log initialstate ");
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
    console.log("Subscription log ");
    console.log(store.getState());
});

store.dispatch(Actions.getRecent());
// unsubscribe from store updates
//unsubscribe();

const mount: Element | null = document.querySelector("#app");

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
        mount,
    );
} else {
    console.error(`#app not found in document`);
}
