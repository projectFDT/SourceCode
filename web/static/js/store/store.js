
import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import  logger from "redux-logger";

import {reducer as formReducer} from 'redux-form';
import {signupReducer} from '../reducers/signupReducer.js';
import {sessionReducer} from '../reducers/session.js';
import {routeReducer } from 'redux-simple-router';
import {hashHistory} from 'react-router';
import {syncHistory} from 'redux-simple-router';

const reduxRouterMiddleware = syncHistory(hashHistory);

const reducers = {
	form: formReducer,
	signupReducer: signupReducer,
	sessionReducer: sessionReducer,
	routing: routeReducer
};

const reducer = combineReducers(
	reducers
);

let store = createStore(reducer, applyMiddleware(thunk, reduxRouterMiddleware));
store.dispatch({type: 'test'});

console.log("state",store.getState());

export default store;