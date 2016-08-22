import React              from 'react';
import { Router }         from 'react-router';
import configRoutes       from '../routes'

const Root = ({routerHistory}) =>{

  return (
    <Router history={routerHistory}>
      {configRoutes()}
    </Router>
  );
};
