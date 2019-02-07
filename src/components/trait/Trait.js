import React from 'react';
import PropTypes from 'prop-types';
import './Trait.scss';
import ReactSVG from 'react-svg';

function Trait(props) {
  const { trait, house } = props;

  const classes = ['trait__icon-wrapper'];

  if (house !== '') {
    classes.push(`trait__icon-wrapper--${house.toLowerCase()}`);
  }

  const traitIcon = require(`../../assets/img/traits/${trait}.svg`);

  return (
    <div className='trait'>
      <div className={classes.join(' ')}>
        <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='trait__icon' />
      </div>
      <p className='trait__name'>{trait}</p>
    </div>
  );
}

Trait.propTypes = {
  trait: PropTypes.string,
  house: PropTypes.string
};

export default Trait;
