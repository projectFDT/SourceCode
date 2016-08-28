import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {signupPostRequest} from '../../actions/signupActions.js';
function validateSignup(data) {
  
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

class ContactForm extends Component {
  
  constructor(props, context){
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    // var {store} = this.context;
    // console.log("store",store);
  }

  handleSubmit(data) {
    //do stuff here
    // e.preventDefault();
    console.log("handleSubmit here!", data);
    // make ajax call here
    // console.log("context in handleSubmit", this.context);
    const {store} = this.context;
    store.dispatch(signupPostRequest(data));

  }

  render() {
    const { fields: {username, email, password, passwordAgain}, handleSubmit} = this.props;
    // console.log("context",this.context)
    
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <label>Username</label>
        <input type="text" {...username}/>     {/* will pass value, onBlur and onChange */}
        {username.error && username.touched && <div>{username.error}</div>}

        <label>Email Address</label>
        <input type="text" {...email}/>  {/* will pass value, onBlur and onChange*/}
        {email.error && email.touched && <div>{email.error}</div>}

        <label>Password</label>
        <input type="password" {...password}/>    {/* will pass value, onBlur and onChange */}
        {password.error && password.touched && <div>{password.error}</div>}
  
        <label>Re-Enter Password</label>
        <input type="password" {...passwordAgain}/>    {/* will pass value, onBlur and onChange */}
        {passwordAgain.error && passwordAgain.touched && <div>{passwordAgain.error}</div>}

        <button type='submit'>Submit</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    fields: PropTypes.object
}
ContactForm.contextTypes = {
  store: React.PropTypes.object.isRequired
}
ContactForm = reduxForm({
    form: 'contact',                      // the username of your form and the key to               // where your form's state will be mounted
    fields: ['username', 'email', 'password', 'passwordAgain'], // a list of all your fields in your form
    validate: validateSignup             // a synchronous validation function
  })(ContactForm);


export default ContactForm;