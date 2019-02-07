import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import './Login.scss';
import ReactSVG from 'react-svg';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.props.setShowHeader(false);
  }

  componentWillUnmount() {
    this.props.setShowHeader(true);
  }

  handleUsernameChange = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.value
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
    this.props.onLogin(this.state.username);
    this.setState ({
      username: '',
      password: ''
    });
  };

  render() {
    const { username, password } = this.state;
    const traitIcon = require('../../assets/img/traits/individuality.svg');

    return (
      <section className='login'>
        <div className='login__icon-container'>
          <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='login__icon' />
        </div>
        <div className='login__container'>
          <h1 className='login__title'>Login</h1>
          <form className='login__form'>
            <div className='login__group'>
              <label className='login__label'>Username</label>
              <input className='login__input' type='text' value={username} onChange={this.handleUsernameChange}></input>
            </div>
            <div className='login__group'>
              <label className='login__label'>Password</label>
              <input className='login__input' type='password' value={password} onChange={this.handlePasswordChange}></input>
            </div>
            <button className='login__button' type='submit' disabled={username === '' || password === ''}>Login</button>
          </form>
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
    onLogin: (username) => {
      dispatch({type: Actions.LOGIN, username});
    },
    setShowHeader: (showHeader) => {
      dispatch({type: Actions.SET_SHOW_HEADER, showHeader});
    }
  };
};

Login.propTypes = {
  onLogin: PropTypes.func,
  setShowHeader: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
