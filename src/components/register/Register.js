import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import './Register.scss';
import ReactSVG from 'react-svg';
import AuthService from '../../services/auth-service';
import AuthForm from '../auth-form/AuthForm';

class Register extends Component {

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
    authService.register(email, password)
      .then((response) => {
        this.getNewUser(response.user.uid);
        this.setState({
          message: 'You applied correctly. Login to access the app.',
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

  getNewUser = (userId) => {
    const newUser = {
      wand: null,
      patronus: '',
      house: ''
    };
    localStorage.setItem(userId, JSON.stringify(newUser));
  }

  render() {
    const traitIcon = require('../../assets/img/traits/mail.svg');
    const { message, showMessage, messageClass } = this.state;
    const displayMessage = (showMessage) 
      ?
      <div className={messageClass.join(' ')}>
        <p className='register__message-text'>{ message }</p>
      </div>
      : null;

    return (
      <section className='register'>
        <div className='register__icon-container'>
          <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='register__icon' />
        </div>
        <div className='register__container'>
          <h1 className='register__title'>Register</h1>
          <AuthForm buttonText='Apply to Hogwarts' onSubmit={this.handleSubmit.bind(this)}></AuthForm>
          { displayMessage }
          <p className='register__text'>Already applied? <Link to='/login' className='register__link'>Enter Now</Link></p>
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
    setShowHeader: (showHeader) => {
      dispatch({type: Actions.SET_SHOW_HEADER, showHeader});
    }
  };
};

Register.propTypes = {
  setShowHeader: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
