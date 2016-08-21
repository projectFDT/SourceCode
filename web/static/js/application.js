//Entry point for the ReactJS Portion of the Application
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './user/index.js';
import Contacts from './contacts/contacts.js';
import About from './about/about.js';
import Home from './home/home.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// console.log(invariant(true, 'haha true'));
// console.log(invariant(false, 'oh, no false'));
const tag = document.getElementById("main_container");

// ReactDOM.render(<Root />, tag);

const RouterFramework = (
	<Router history={hashHistory}>
		<Route path="/" component={Root}>
			<IndexRoute component={Home} />
			<Route path="/contacts" component={Contacts} />
			<Route path="/about" component={About}/ >
		</Route>
	</Router>

);

ReactDOM.render (
	RouterFramework
	,document.getElementById("main_container")
);

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={Root}/>
//     <Route path="/repos" component={Repos}/>
//     <Route path="/about" component={About}/>
//   </Router>
// ), document.getElementById('app'))