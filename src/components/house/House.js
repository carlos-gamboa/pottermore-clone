import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './House.scss';
import PropTypes from 'prop-types';
import Trait from '../trait/Trait';

function House(props) {

  let houseBackground, houseData;

  if (props.house !== '') {
    houseBackground = require(`../../assets/img/${props.house.toLowerCase()}/house-background.jpg`);
    houseData = props.houses[props.house.toLowerCase()];
  }

  const houseContent = (props.house !== '') 
    ? 
    <div className='house__main'>
      <div className='house__introduction' style={{
        backgroundImage: 'url(' + houseBackground + ')'
      }}>
        <h1 className='house__heading'>{props.house}</h1>
        { houseData.introduction.map((paragraph, i) => {
          return (
            <p className='house__text' key={i}>{paragraph}</p>
          );
        })}
      </div>
      <div className='house__traits-container'>
        { houseData.traits.map((trait, i) => {
          return (
            <Trait key={i} trait={trait}></Trait>
          );
        })}
      </div>
    </div>
    :
    <div className='house__container'>
      <div className='house__title-container'>
        <h2 className='house__title'>Your Hogwarts House</h2>
      </div>
      <div className='house__middle-container'>
        <p className='house__middle-text'>Or</p>
      </div>
      <div className='house__ceremony-container'>
        <p className='house__ceremony-title'>The Sorting Ceremony</p>
        <p className='house__ceremony-text'>Answer truthfully, after all the hat&apos;s decision is final</p>
        <Link to='sorting' className='house__button'>Begin the experience</Link>
      </div>
    </div>
  ;

  return (
    <section className='house'>
      {houseContent}
    </section>
  );
  
}

House.propTypes = {
  house: PropTypes.string,
  houses: PropTypes.object
};

export default withRouter(House);