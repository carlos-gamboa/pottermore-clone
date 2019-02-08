import React from 'react';
import './Spell.scss';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

function Spell(props) {
  const { name, type, effect, house } = props;
  const classes = ['spell__title'];

  const spellIcon = require(`../../assets/img/icons/${type.toLowerCase()}.svg`);

  if (house !== '') {
    classes.push(`spell__title--${house.toLowerCase()}`);
  }

  return (
    <div className='spell'>
      <div className={classes.join(' ')}>
        <ReactSVG src={spellIcon} svgStyle={{ fill: 'currentColor' }} className='spell__icon' />
        <p className='spell__name'>{name}</p>
      </div>
      <div className='spell__info'>
        <p className='spell__type'>{type}</p>
        <p className='spell__effect'>{effect}</p>
      </div>
    </div>
  );
}

Spell.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  effect: PropTypes.string,
  house: PropTypes.string
};

Spell.defaultProps = {
  name: 'Unknown Name',
  type: 'Unknown Type',
  effect: 'Unknown Effect'
};

export default Spell;
