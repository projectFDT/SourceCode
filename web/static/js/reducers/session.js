const initialState = {
  currentUser: null,
};

export function sessionReducer(state = initialState, action) {
	if (action.type == 'CURRENT_USER'){
		return { ...state, currentUser: action.currentUser };
	}
     
    return state;
}