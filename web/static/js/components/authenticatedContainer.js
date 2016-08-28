import React        from 'react';
import { connect }  from 'react-redux';
import { routeActions } from 'redux-simple-router';
import Header from './header/header.js';

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    console.log("component did mount");

    if (localStorage.getItem('phoenixAuthToken')) {
      // dispatch(Actions.currentUser());
      console.log("currentUser exists");
    } else {
      console.log("push signup");
      dispatch(routeActions.push('/signup'));
    }
  }

  render() {
    return (
      <div>
      <Header />
      {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.sessionReducer.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
