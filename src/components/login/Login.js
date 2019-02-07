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
        this.setMessageTimeout();
      })
      .catch((error) => {
        this.setState({
          message: error.message,
          showMessage: true,
          messageClass: ['register__message', 'register__message--error']
        });
        this.setMessageTimeout();
      });
  };

  setMessageTimeout = () => {
    setTimeout(() => {
      this.setState({
        message: '',
        showMessage: false,
        messageClass: []
      });
    }, 5000);
  }

  render() {
    const traitIcon = require('../../assets/img/traits/individuality.svg');
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
          <p className='login__text'>Not registered to Hogwarts? <Link to='/register' className='login__link'>Apply Now</Link></p>
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
    setUser: (username) => {
      dispatch({type: Actions.SET_USER, username});
    },
    setShowHeader: (showHeader) => {
      dispatch({type: Actions.SET_SHOW_HEADER, showHeader});
    }
  };
};

Login.propTypes = {
  setUser: PropTypes.func,
  setShowHeader: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
