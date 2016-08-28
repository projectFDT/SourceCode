import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
function validateSignin(data) {
  
  const errors = {};
  if (!data.username) {
    errors.username = 'Required';
  }
  if (data.password != undefined && data.passwordAgain != undefined){
      if(data.password.length < 6 || data.passwordAgain.length < 6){
        errors.password = 'Password must be at least 6 characters';
      } else if (data.password != data.passwordAgain){
        errors.password = 'You entered two different passwords';
      }
  }
  
  if (!data.email) {
    errors.email = 'Email required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

class SigninForm extends Component {
  
  constructor(props, context){
    super(props, context);
    this._handleSubmit = this._handleSubmit.bind(this);
    // var {store} = this.context;
    // console.log("store",store);
  }

  _handleSubmit(data) {
    console.log("handle signin here!", data);
    // make ajax call here
  
    const {store} = this.context;
    // store.dispatch(signupPostRequest(data));

  }

  render() {
    const { fields: {username,password}, handleSubmit} = this.props;
    // console.log("context",this.context)
    
    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <label>Username</label>
        <input type="text" {...username}/>     {/* will pass value, onBlur and onChange */}
        {username.error && username.touched && <div>{username.error}</div>}

        <label>Password</label>
        <input type="password" {...password}/>    {/* will pass value, onBlur and onChange */}
        {password.error && password.touched && <div>{password.error}</div>}

        <button type='submit'>Submit</button>
      </form>
    );
  }
}

SigninForm.propTypes = {
    handleSubmit: PropTypes.func,
    fields: PropTypes.object
}
SigninForm.contextTypes = {
  store: React.PropTypes.object.isRequired
}
SigninForm = reduxForm({
    form: 'signin',                      
    fields: ['username', 'password'], // a list of all your fields in your form
    validate: validateSignin             // a synchronous validation function
  })(SigninForm);


export default SigninForm;