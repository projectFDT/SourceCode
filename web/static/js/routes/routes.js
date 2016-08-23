import React               from 'react';

import About               from '../components/landing/about';
import Contact             from '../components/landing/contact';
import Home                from '../components/landing/home';
import SignUp              from '../components/registration/sign_up';

import LandingLayout       from '../layouts/landing_layout';

import { Router, Route, IndexRoute } from 'react-router';

export default function configRoutes(store){
  return(
    <Route path="/">
      <Route component={LandingLayout}>
        <IndexRoute component={Home} />
        <Route path="/about"    component={About} />
        <Route path="/contacts" component={Contact} />
        <Route path="/new"      component={SignUp} />
      </Route>
    </Route>
  );
};
