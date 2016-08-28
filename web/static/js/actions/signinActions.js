//SIGN IN ACTIONS
export submitSignForm = function(data){
	return {
		type: 'SUBMIT_SIGNIN_FORM'
	}
	
}

export signinPostRequest = function(data){
	return {
		type: 'SIGNIN_POST_REQUEST'
	}
	
}

export signinSuccess = function(data, response){
	return {
		type: 'SIGNIN_SUCESS'
	}
	
}

export signinFailure = function(data, error){
	return {
		type: 'SIGNIN_FAILURE'
	}
	
}
