import React               from 'react';

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
  }

  _onSubmit(e){
    e.preventDefault();

  }

  render(){
    return(
      <div>
        <h1>Sign Up Page</h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({

});
