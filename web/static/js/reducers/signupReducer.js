import store from './../store/store.js';
import {signupSuccess, signupFailure} from './../actions/signupActions.js';
const initialState = {
	username: undefined,
	password: undefined,
	email: undefined
}

export function signupReducer(state = initialState, action){
	if(action.type == "SUBMIT_SIGNUP_FORM"){
		
		return state
	}else if(action.type == "SIGNUP_SUCCESS"){

	}else if(action.type == "SIGNUP_FAILURE"){

	}
	return state
}