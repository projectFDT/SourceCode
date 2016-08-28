import React from 'react';
import {Link} from 'react-router';

const SigninComponent = React.createClass ({
    render(){
        return(
            <li><Link to="/signin">Sign in</Link></li>
        );
    }
});
const SignupComponent = React.createClass ({
    render(){
        return(
            <li><Link to="/signup">Sign up</Link></li>
        );
    }
});
const SignoutComponent = React.createClass ({
    render(){
        return(
            <li><Link to="/signin">Sign out</Link></li>
        );
    }
});


const Header = React.createClass ({
    getInitialState(){
        return {
            loggedIn: false,
        };
    },
      render(){
        var loginComponent;
        if(this.state.loggedIn){
            loginComponent = <SignoutComponent />;
        }else{
            loginComponent = <SigninComponent />;
        }
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
});

// {loginComponent}
// {this.state.loggedIn?"":<SignupComponent/>}

export default Header;
