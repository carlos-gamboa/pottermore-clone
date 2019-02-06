import React from 'react';
import './Spell.scss';
import PropTypes from 'prop-types';

function Spell(props) {
  const { name, type, effect, house } = props;
  const classes = ['spell__title'];

  if (house !== '') {
    classes.push(`spell__title--${house.toLowerCase()}`);
  }

  return (
    <div className='spell'>
      <div className={classes.join(' ')}>
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
