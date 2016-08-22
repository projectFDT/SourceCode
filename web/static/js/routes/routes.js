import Root               from '../containers/index.js';
import Contacts           from '../contacts/contacts.js';
import About              from '../about/about.js';
import Home               from '../home/home.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';



export default function configRoutes(){

};


const RouterFramework = (
		<Route path="/" component={Root}>
			<IndexRoute component={Home} />
			<Route path="/contacts" component={Contacts} />
			<Route path="/about" component={About}/ >
		</Route>
);
