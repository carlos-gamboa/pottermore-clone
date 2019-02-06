import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

function Filter(props) {
  const classes = ['filter'];

  if (props.isSelected) {
    classes.push('filter--active');
  }

  if (props.house !== '') {
    classes.push(`filter--${props.house.toLowerCase()}`);
  }

  function handleClick(event) {
    event.preventDefault();
    props.onSelect(props.label);
  }

  return (
    <button className={classes.join(' ')} onClick={(event) => handleClick(event)}>
      {props.label}
    </button>
  );
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default  Filter;
