import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

// function validateForm(data){
//   const errors = {}
//   console.log(data)
//   if (!data.username || data.username.length == 0) {
//     errors.username = 'Username required'
//   } 

//   if(data.password.length < 6 || data.passwordAgain.length < 6){
//     errors.password = 'Password must be at least 6 characters';
//   } else if (data.password != data.passwordAgain){
//     errors.password = 'You entered two different passwords';
//   }

//   if (!data.email) {
//     errors.email = 'Email required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
//     errors.email = 'Invalid email address'
//   }
  
//   return errors
// }

// class SignupForm extends Component {
//   handleSubmit(e){
//     console.log(e)
//   }
//   render() {
//     const { fields: { username, email, password, passwordAgain }, handleSubmit } = this.props
//     return (
//       <form onSubmit={handleSubmit(this.handleSubmit)}>
//         <div>
//           <label>Username</label>
//           <div>
//             <input type="text" placeholder="Username" {...username}/>
//           </div>
//           {username.touched && username.error && <div>{username.error}</div>}
//         </div>
//         <div>
//           <label>Email</label>
//           <div>
//             <input type="text" placeholder="Email" {...email}/>
//           </div>
//           {email.touched && email.error && <div>{email.error}</div>}
//         </div>
//         <div>
//           <label>Password</label>
//           <div>
//             <input type="text" placeholder="Password" {...password}/>
//           </div>
//           {password.touched && password.error && <div>{password.error}</div>}
//         </div>
//         <div>
//           <label>Re-enter Password</label>
//           <div>
//             <input type="text" placeholder="Password Again" {...passwordAgain}/>
//           </div>
//           {passwordAgain.touched && passwordAgain.error && <div>{passwordAgain.error}</div>}
//         </div>
//         <div>
//           <button type="submit">
//             Submit
//           </button>
          
//         </div>
//       </form>
//     )
//   }
// }

// SignupForm.propTypes = {
//   fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired
// }

// SignupForm = reduxForm({
//   form: 'Signup',
//   fields: [ 'username', 'email', 'password', "passwordAgain" ],
//   validate: validateForm
// })(SignupForm);

// export default SignupForm;


function validateSignup(data) {
  
  const errors = {};
  if (!data.username) {
    errors.username = 'Required';
  }
  if (data.password){
      if(data.password.length < 6 || data.passwordAgain.length < 6){
        errors.password = 'Password must be at least 6 characters';
      } else if (data.password != data.passwordAgain){
        errors.password = 'You entered two different passwords';
      }
  }
  
  // console.log(data.password)
  if (!data.email) {
    errors.email = 'Email required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

class ContactForm extends Component {
  
  handleSubmit(e) {
    //do stuff here
    console.log("handleSubmit here!", e)
    // make ajax call here

  }

  render() {
    const { fields: {username, email, password, passwordAgain}, handleSubmit} = this.props;
    
    
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

ContactForm = reduxForm({
    form: 'contact',                      // the username of your form and the key to               // where your form's state will be mounted
    fields: ['username', 'email', 'password', 'passwordAgain'], // a list of all your fields in your form
    validate: validateSignup             // a synchronous validation function
  })(ContactForm);


export default ContactForm;