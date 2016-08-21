import React from 'react';
import {Link} from 'react-router';
const Header = React.createClass ({

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
})

export default Header;
