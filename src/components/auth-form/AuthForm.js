import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AuthForm.scss';

class AuthForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
  };

  render() {
    const { email, password } = this.state;
    const { buttonText } = this.props;
    return (
      <form className='auth-form__form' onSubmit={(event) => this.handleSubmit(event)}>
        <div className='auth-form__group'>
          <label htmlFor='email' className='auth-form__label'>Username</label>
          <input name='email' className='auth-form__input' type='email' value={email} onChange={this.handleEmailChange}></input>
        </div>
        <div className='auth-form__group'>
          <label htmlFor='password' className='auth-form__label'>Password</label>
          <input name='password' className='auth-form__input' type='password' value={password} onChange={this.handlePasswordChange}></input>
        </div>
        <button className='auth-form__button' type='submit' disabled={email === '' || password === ''}>{buttonText}</button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func
};

export default AuthForm;