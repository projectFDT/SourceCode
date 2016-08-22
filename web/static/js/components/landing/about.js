import React               from 'react';
import LandingHeader       from '../headers/landing_header';

export default class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <LandingHeader />
        <h1>About Page</h1>
      </div>
    );
  }
}
