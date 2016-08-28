import React, { Component, PropTypes }       from 'react';
import { reduxForm }                         from 'redux-form';
import SimpleCard                            from '../../layouts/SimpleCard.js'

class SignUp extends Component {
  constructor(props){
    super(props);
  }

  _onSubmit(e){
    e.preventDefault();
    console.log("HERE");
  }

  render(){
    console.log(this.props);
    const {fields: {username, email, password, passwordAgain}, handleSubmit} = this.props;

    return(
      <SimpleCard>
        <span className="card-title black-text">Sign Up</span>
        <form onSubmit={handleSubmit(this._onSubmit)}>
          <div className="row">
            <label>Username</label>
            <input type="text" {...username}/>
            {username.error && username.touched && <div>{username.error}</div>}
          </div>

          <div className="row">
            <label>Email Address</label>
            <input type="text" {...email}/>
            {email.error && email.touched && <div>{email.error}</div>}
          </div>

          <div className="row">
            <label>Password</label>
            <input type="password" {...password}/>
            {password.error && password.touched && <div>{password.error}</div>}
          </div>

          <div className="row">
            <label>Re-Enter Password</label>
            <input type="password" {...passwordAgain}/>
            {passwordAgain.error && passwordAgain.touched && <div>{passwordAgain.error}</div>}
          </div>

        <button type='submit' className="waves-effect waves-light btn">Submit</button>
        </form>
      </SimpleCard>
    );
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  fields: PropTypes.array
}

export default reduxForm({
  form: 'register',
  fields: ['username', 'email', 'password', 'passwordAgain']
})(SignUp);
