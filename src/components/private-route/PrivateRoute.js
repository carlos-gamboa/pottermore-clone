import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {

  render() {
    const { isLoggedIn, redirectTo, component: Component, render, ...rest } = this.props;
    let redirectElement = redirectTo;
    return (
      <Route {...rest} render={(props) => (
        isLoggedIn
          ? (render ? render : <Component {...props} />)
          : <Redirect to={redirectElement} />
      )} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user !== ''
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
  component: PropTypes.func,
  render: PropTypes.object
};

PrivateRoute.defaultProps = {
  redirectTo: '/login'
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);