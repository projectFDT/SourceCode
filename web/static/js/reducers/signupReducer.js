import store from './../store/store.js';
import {signupSuccess, signupFailure} from './../actions/signupActions.js';
const initialState = {
	username: undefined,
	password: undefined,
	email: undefined
}

export function signupReducer(state = initialState, action){
	if(action.type == "SUBMIT_SIGNUP_FORM"){
		// console.log("submit signup form reducer works");
		// const ajaxCall = 
		function ajaxCall(data){
			return new Promise((resolve, reject) => {
				resolve("pretend success")
			});
		}

		const data = action.data;
		ajaxCall(data).then((response) => {
			console.log(response);
			store.dispatch(signupSuccess(data, response));
		}).catch((error) => {
			console.log(error);
			store.dispatch(signupFailure(data, error));
		})
		return state
	}else if(action.type == "SIGNUP_SUCCESS"){

	}else if(action.type == "SIGNUP_FAILURE"){

	}
	return state
}