//Entry point for the ReactJS Portion of the Application
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/user/index.js';
import Contacts from './components/contacts/contacts.js';
import About from './components/about/about.js';
import Home from './components/home/home.js';
import ContactForm from './components/signup/signup.js';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import  logger from "redux-logger";

import {Provider} from 'react-redux'


const reducers = {
	form: formReducer
}
const reducer = combineReducers(reducers);



// const middleware = applyMiddleware(thunk, logger());
let store = createStore(reducer);
store.dispatch({type: 'test'}); //test
// console.log(store);

const tag = document.getElementById("main_container");
// console.log("store", store);


const RouterFramework = (
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Root}>
			<IndexRoute component={Home}/>
			<Route path="/contacts" component={Contacts} />
			<Route path="/about" component={About} />
			<Route path="/signup" component={ContactForm} />
		</Route>

	</Router>
	</Provider>

);

const render = () => {
	ReactDOM.render (
	RouterFramework
	,document.getElementById("main_container")
	);
}

store.subscribe(render);
render();