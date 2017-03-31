import './index.html';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './redux-router/reducers';
reducers.routing = routerReducer;

import App from './redux-router/App';
import VisibleCards from './redux-router/VisibleCards';

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
    <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/deck/:deckId" component={VisibleCards}/>
    </Router>
);

    function run() {
    ReactDOM.render((
        <Provider store={store}>
            {routes}
        </Provider>), document.getElementById('app')
    );
}

run();
store.subscribe(run);

store.subscribe(() => {
    console.log(store.getState());
});