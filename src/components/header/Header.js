import React from 'react';
import './Header.scss';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header(props) {
  const crest = (props.house !== '')
    ? 
    <img src={require(`../../assets/img/${props.house.toLowerCase()}/crest.png`)} alt='Header crest' className='header__crest'/>
    : null;

  function getHouseClasses (baseClass) {
    const classes = [];
    classes.push(baseClass);
    if (props.house !== '') {
      classes.push(`${baseClass}--${props.house.toLowerCase()}`);
    }
    return classes.join(' ');
  }

  return (
    
    <header className={getHouseClasses('header')}>
      <div className='header__crest-container'>
        {crest}
        <h1 className='header__name'>Greetings Wizard</h1>
      </div>
      <p className='header__text'>Welcome to your personal Potterless page</p>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__list-item'><NavLink to='/' exact activeClassName='header__link--active' className='header__link'>Home</NavLink></li>
          <li className='header__list-item'><NavLink to='/house' exact activeClassName='header__link--active' className='header__link'>Hogwarts House</NavLink></li>
          <li className='header__list-item'><NavLink to='/wand' exact activeClassName='header__link--active' className='header__link'>My wand</NavLink></li>
          <li className='header__list-item'><NavLink to='/patronus' exact activeClassName='header__link--active' className='header__link'>My Patronus</NavLink></li>
          <li className='header__list-item'><NavLink to='/spells' exact activeClassName='header__link--active' className='header__link'>Spells</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  house: PropTypes.string
};

export default withRouter(Header);
