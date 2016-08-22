import React               from 'react';
import LandingHeader       from '../headers/landing_header';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <LandingHeader />
        <h1>Contact Page</h1>
      </div>
    );
  }
}
