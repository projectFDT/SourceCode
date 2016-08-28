//SIGN UP ACTIONS
import { routeActions } from 'redux-simple-router';
import {store} from '../store/store.js';

export function submitSignupForm(data){
	console.log("submit signup form action fired");
	return {
		type: 'SUBMIT_SIGNUP_FORM',
		data: data
	}
}

export function signupPostRequest(data){ 
	console.log("dispatch signupPost action");
	return function(dispatch){
		console.log("dispatch function", dispatch);
		dispatch({
			type: 'SUBMIT_SIGNUP_FORM',
			data:data
		});

		new Promise((resolve, reject) => {
			resolve("pretend success");
		}).then((response) => {
			console.log("resolve",response);

			// localStorage.setItem("phoenixAuthToken", response.jwt);
			dispatch({
				type: 'CURRENT_USER',
				currentUser: response.user // get the current user from response
			})

			dispatch(routeActions.push('/'));
			// dispatch(signupSuccess(data, response));
		}).catch((error) => {
			console.log("error", error);
			// dispatch(signupFailure(data, error));
		});
	};
	

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