import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Wand.scss';

class Wand extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setIsLoggedIn: (isLoggedIn, customer, username) => {
    //   dispatch({type: Actions.SET_LOGGED_IN, payload: {isLoggedIn: isLoggedIn, customer: customer, username: username}});
    // }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wand));