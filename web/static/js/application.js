//Entry point for the ReactJS Portion of the Application
import { browserHistory }       			from 'react-router';
import { syncHistoryWithStore }       from 'react-router-redux';


import React 													from 'react';
import ReactDOM 											from 'react-dom';
import Root                           from './containers/root';

import configureStore                 from './store';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const tag  = document.getElementById("main_container");
const root = <Root routerHistory={history} store={store}/>;

ReactDOM.render(root, document.getElementById("main_container"));
