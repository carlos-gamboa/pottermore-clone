import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Actions from '../../redux/actions/actions';
import PropTypes from 'prop-types';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      checkbox: false
    };
  }

  handleCheckboxChange() {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.onLogout();
    this.props.history.replace('/login');
  }

  getHouseClasses (baseClass) {
    const classes = [];
    classes.push(baseClass);
    if (this.props.house !== '') {
      classes.push(`${baseClass}--${this.props.house.toLowerCase()}`);
    }
    return classes.join(' ');
  }

  render() {
    const { house } = this.props;
    const { checkbox } = this.state;
    const navClasses = ['header__nav'];

    const crest = (house !== '')
      ? 
      <img src={require(`../../assets/img/${house.toLowerCase()}/crest.png`)} alt='Header crest' className='header__crest'/>
      : null;

    if (!checkbox) {
      navClasses.push('header__nav--hidden');
    }

    return (    
      <header className={this.getHouseClasses('header')}>
        <div className='header__crest-container'>
          {crest}
          <h1 className='header__name'>Greetings Wizard</h1>
        </div>
        <p className='header__text'>Welcome to your personal Potterless page</p>
        <div className="header__mobile">
          <input
            type="checkbox"
            className="header__checkbox"
            id="header-toggle"
            value={checkbox}
            onChange={this.handleCheckboxChange.bind(this)}
          />
          <label htmlFor="header-toggle" className="header__button">
            <span className="header__icon">&nbsp;</span>
          </label>
        </div>
        <nav className={navClasses.join(' ')}>
          <ul className='header__list'>
            <li className='header__list-item'><NavLink to='/' exact activeClassName='header__link--active' className='header__link'>Home</NavLink></li>
            <li className='header__list-item'><NavLink to='/house' exact activeClassName='header__link--active' className='header__link'>Hogwarts House</NavLink></li>
            <li className='header__list-item'><NavLink to='/wand' exact activeClassName='header__link--active' className='header__link'>My wand</NavLink></li>
            <li className='header__list-item'><NavLink to='/patronus' exact activeClassName='header__link--active' className='header__link'>My Patronus</NavLink></li>
            <li className='header__list-item'><NavLink to='/spells' exact activeClassName='header__link--active' className='header__link'>Spells</NavLink></li>
            <li className='header__list-item'><button onClick={(event) => this.handleLogout(event)} className='header__link'>Logout</button></li>
          </ul>
        </nav>
      </header>
    ); 
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch({type: Actions.LOGOUT});
    }};
};

Header.propTypes = {
  house: PropTypes.string,
  onLogout: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
