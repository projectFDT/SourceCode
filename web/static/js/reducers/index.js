import { combineReducers }          from 'redux';
import { routerReducer }            from 'react-router-redux';
import { reducer as formReducer }   from 'redux-form';
import session                      from './session';

export default combineReducers({
  routing: routerReducer,
  session: session,
  form: formReducer
});
