import React, { Component, PropTypes }       from 'react';
import { reduxForm, Field  }                 from 'redux-form';
import SimpleCard                            from '../../layouts/simple_card.js'


class SignUp extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func
  }

  constructor(props){
    super(props);
  }

  _onSubmit(data){
    console.log(data);
  }


  render(){
    const { handleSubmit } = this.props;
    return(
      <SimpleCard>
        <span className="card-title black-text">Sign Up</span>
        <form onSubmit={handleSubmit(this._onSubmit)}>
          <div className="row">
            <label htmlFor="username">Username</label>
            <Field name="username" component={renderInput} type="text"/>
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <Field name="email" component={renderInput} type="text"/>
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <Field name="password" component={renderInput} type="password"/>
          </div>
          <div className="row">
            <label htmlFor="passwordConf">Confirm Password</label>
            <Field name="passwordConf" component={renderInput} type="password"/>
          </div>
          <button type='submit' className="waves-effect waves-light btn">Submit</button>
        </form>
      </SimpleCard>
    );
  }
}

export default reduxForm({
  form: 'signUp'
})(SignUp);


const renderInput = field =>
  <div>
    <input {...field.input} type={field.type}/>
    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
