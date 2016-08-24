import React from 'react';

class Home extends React.Component {
	
	constructor(props, context){
		super(props, context);
		var {store} = this.context;
		
	}
	  render(){
	    const {store} = this.context;
	    console.log("render", store);
	    return(
	    	<div>
	    		This is the Home
	    	</div>
			);
	}
	
}

Home.contextTypes = {
	store: React.PropTypes.object.isRequired
}

export default Home;
