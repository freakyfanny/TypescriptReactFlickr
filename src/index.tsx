import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as Actions from './actions';
import { Homepage } from './containers/Homepage';
import { rootReducer } from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

// Log the initial state
// tslint:disable-next-line:no-console
console.log('Log initialstate');
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
    // tslint:disable-next-line:no-console
    console.log('Subscription log');
    // tslint:disable-next-line:no-console
    console.log(store.getState());
});

store.dispatch(Actions.getRecent());

const mount: Element | null = document.querySelector('#app');

if (mount !== null) {
    ReactDOM.render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
        mount,
    );
} else {
    // tslint:disable-next-line:no-console
    console.error(`#app not found in document`);
}
