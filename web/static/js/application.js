//Entry point for the ReactJS Portion of the Application
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/user/index.js';
import Contacts from './components/contacts/contacts.js';
import About from './components/about/about.js';
import Home from './components/home/home.js';
import ContactForm from './components/signup/signup.js';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import {Provider} from 'react-redux';

import store from './store/store.js';


// const middleware = applyMiddleware(thunk, logger());
// let store = createStore(reducer, applyMiddleware(thunk));
// store.dispatch({type: 'test'});




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