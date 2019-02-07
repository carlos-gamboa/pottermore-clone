import React from 'react';
import PropTypes from 'prop-types';
import './Trait.scss';
import ReactSVG from 'react-svg';

function Trait(props) {
  const { trait } = props;

  const traitIcon = require(`../../assets/img/traits/${trait}.svg`);

  return (
    <div className='trait'>
      <div className='trait__icon-wrapper'>
        <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='trait__icon' />
      </div>
      <p className='trait__name'>{trait}</p>
    </div>
  );
}

Trait.propTypes = {
  trait: PropTypes.string
};

export default Trait;
