import React from 'react';
import PropTypes from 'prop-types';
import './Dot.scss';

function Dot(props) {
  const classes = ['dot'];

  if (props.isSelected) {
    classes.push('dot--active');
  }

  function handleClick(event) {
    event.preventDefault();
    props.onSelect(props.dotIndex);
  }

  return (
    <button className={classes.join(' ')} onClick={(event) => {
      handleClick(event);
    }}></button>
  );
}

Dot.propTypes = {
  dotIndex: PropTypes.number,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Dot;