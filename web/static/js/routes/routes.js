import React               from 'react';

import About               from '../components/landing/about';
import Contact             from '../components/landing/contact';
import Home                from '../components/landing/home';

import { Router, Route, IndexRoute } from 'react-router';

export default function configRoutes(){

  return(
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="/contacts" component={Contact} />
      <Route path="/about" component={About}/ >
    </Route>
  );

};
