
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import  logger from "redux-logger";
import {signupReducer} from '../reducers/signupReducer.js';

const reducers = {
	form: formReducer,
	signupReducer: signupReducer
};

const reducer = combineReducers(
	reducers
);

let store = createStore(reducer, applyMiddleware(thunk));
store.dispatch({type: 'test'});

export default store;