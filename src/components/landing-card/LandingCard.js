import React from 'react';
import './LandingCard.scss';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

function LandingCard(props) {
  const style = {
    backgroundImage: 'url(' +props.backgroundImage + ')'
  };

  function getHouseClasses (baseClass) {
    const classes = [];
    classes.push(baseClass);
    if (props.house !== '') {
      classes.push(`${baseClass}--${props.house.toLowerCase()}`);
    }
    return classes.join(' ');
  }

  return (
    <div className='landing-card' style={style}>
      <h2 className='landing-card__title'>{props.title}</h2>
      <p className='landing-card__value'>{props.value}</p>
      <Link to={props.reference} className={getHouseClasses('landing-card__button')}>{props.buttonText}</Link>
    </div>
  );
}

LandingCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  reference: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundImage: PropTypes.string,
  house: PropTypes.string
};

export default withRouter(LandingCard);
