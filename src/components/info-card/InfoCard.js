import React from 'react';
import './InfoCard.scss';
import PropTypes from 'prop-types';

function InfoCard(props) {

  const details = (props.details) 
    ?
    <p className='info-card__details'>An extract from</p>
    : 
    null; 

  const author = (props.author) 
    ?
    <p className='info-card__author'>By J.K. Rowling</p>
    : 
    null; 

  return (
    <div className='info-card'>
      {details}
      <p className='info-card__title'>{props.title}</p>
      {author}
      <p className='info-card__description'>{props.description}</p>
    </div>
  );
}

InfoCard.propTypes = {
  details: PropTypes.bool,
  title: PropTypes.string,
  author: PropTypes.bool,
  description: PropTypes.string
};

InfoCard.defaultProps = {
  details: false,
  author: false
};

export default InfoCard;