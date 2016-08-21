import React from 'react';
import Header from '../header/header.js';
import Body from '../body/body.js';
export default class Root extends React.Component {

  render(){
    return(
    <div>
      <Header />
      <Body />
    </div>
    );
  }
}
