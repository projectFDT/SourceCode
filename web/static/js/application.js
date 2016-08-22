//Entry point for the ReactJS Portion of the Application
import React 													from 'react';
import ReactDOM 											from 'react-dom';
import { browserHistory }       			from 'react-router';

import Root                           from './containers/root'

const tag  = document.getElementById("main_container");
const root = <Root routerHistory={browserHistory} />;

ReactDOM.render(root, document.getElementById("main_container"));
