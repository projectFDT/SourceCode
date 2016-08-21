import React from 'react';

class Header extends React.Component {

  render(){
    return(
    	<div>
            <nav role="navigation">
    		<ul>
    			<li><a href="#">Home</a></li>
    			<li><a href="#">About</a></li>
    			<li><a href="#">Contact</a></li>
    		</ul>
            </nav>
    	</div>
    );
  }
}

export default Header;
