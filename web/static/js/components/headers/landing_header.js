import React               from 'react';
import { Link }            from 'react-router';

export default class LandingHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    	<div>
        <nav role="nav">
    		  <ul>
    		    <li><Link to="/">Home</Link></li>
    			  <li><Link to="/about">About</Link></li>
    			  <li><Link to="/contacts">Contact</Link></li>
    		  </ul>
        </nav>
    	</div>
    );
  }
}
