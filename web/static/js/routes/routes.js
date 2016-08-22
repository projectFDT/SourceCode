import React               from 'react';

import About               from '../components/landing/about';
import Contact             from '../components/landing/contact';
import Home                from '../components/landing/home';

import LandingLayout       from '../layouts/landing_layout';

import { Router, Route, IndexRoute } from 'react-router';

export default function configRoutes(){
  return(
    <Route path="/">
      <Route component={LandingLayout}>
        <IndexRoute component={Home} />
        <Route path="/contacts" component={Contact} />
        <Route path="/about" component={About}/ >
      </Route>
    </Route>
  );
};
