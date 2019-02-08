import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import './Login.scss';
import ReactSVG from 'react-svg';
import AuthService from '../../services/auth-service';
import AuthForm from '../auth-form/AuthForm';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      showMessage: false,
      messageClass: []
    };
  }

  componentDidMount() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.props.setUser(user);
      this.props.history.replace('/');
    }
    this.props.setShowHeader(false);
  }

  componentWillUnmount() {
    this.props.setShowHeader(true);
  }

  handleSubmit = (email, password) => {
    const authService = new AuthService();
    authService.login(email, password)
      .then((response) => {
        this.props.setUser(response.user.uid);
        this.setState({
          message: 'You\'ve successfully entered Hogwarts.',
          showMessage: true,
          messageClass: ['register__message', 'register__message--success']
        });
        this.setMessageTimeout(3000, true);
      })
      .catch((error) => {
        this.setState({
          message: error.message,
          showMessage: true,
          messageClass: ['register__message', 'register__message--error']
        });
        this.setMessageTimeout(5000, false);
      });
  };

  setMessageTimeout = (time, redirect) => {
    setTimeout(() => {
      this.setState({
        message: '',
        showMessage: false,
        messageClass: []
      });
      if (redirect) {
        this.props.history.replace('/');
      }
    }, time);
  }

  render() {
    const traitIcon = require('../../assets/img/icons/individuality.svg');
    const { message, showMessage, messageClass } = this.state;
    const displayMessage = (showMessage) 
      ?
      <div className={messageClass.join(' ')}>
        <p className='register__message-text'>{ message }</p>
      </div>
      : null;

    return (
      <section className='login'>
        <div className='login__icon-container'>
          <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='login__icon' />
        </div>
        <div className='login__container'>
          <h1 className='login__title'>Login</h1>
          <AuthForm buttonText='Enter Hogwarts' onSubmit={this.handleSubmit.bind(this)}></AuthForm>
          { displayMessage }
          <p className='login__text'>Not registered? <Link to='/register' className='login__link'>Apply Now</Link></p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch({type: Actions.SET_USER, user});
    },
    setShowHeader: (showHeader) => {
      dispatch({type: Actions.SET_SHOW_HEADER, showHeader});
    }
  };
};

Login.propTypes = {
  setUser: PropTypes.func,
  setShowHeader: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
