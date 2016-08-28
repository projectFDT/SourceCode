//SIGN UP ACTIONS


// export function submitSignupForm(data){
// 	return {
// 		type: 'SUBMIT_SIGNUP_FORM',
// 		data: data
// 	}
// }

export function signupPostRequest(data){ 
	console.log("dispatch signupPost action");
	return {
		type: 'SUBMIT_SIGNUP_FORM',
		data: data
	}
	
}

export function signupSuccess(data, response){
	console.log("dispatch signup success action");
	return{
		type: 'SIGNUP_SUCESS'
	}	
}
export function signupFailure(data, error){
	console.log("dispatch signup failure action");
	return {
		type: 'SIGNUP_FAILURE'
	}
	
}