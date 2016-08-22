import React               from 'react';
import LandingHeader       from '../headers/landing_header';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <LandingHeader />
        <h1>Home Page</h1>
      </div>
    );
  }
}
