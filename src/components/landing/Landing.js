import React, { Component } from 'react';
import './Landing.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingCard from '../landing-card/LandingCard';

class Landing extends Component {

  constructor(props) {
    super();
    this.state = {
      cards: this.getCards(props)
    };
  }

  getCards(props) {
    const cards = [];
    cards.push({
      reference: '/house',
      title: this.getCardTitle(props.house, 'Hogwarts House'),
      value: this.getCardValue(props.house, 'Hogwarts House'),
      backgroundImage: this.getCardBackgroundImage(props.house, 'Hogwarts House'),
      buttonText: this.getCardButtonText(props.house, 'house')
    });
    cards.push({
      reference: '/patronus',
      title: this.getCardTitle(props.patronus, 'Patronus'),
      value: this.getCardValue(props.patronus, 'Patronus'),
      backgroundImage: this.getCardBackgroundImage(props.patronus, 'Patronus'),
      buttonText: this.getCardButtonText(props.patronus, 'patronus')
    });
    cards.push({
      reference: '/wand',
      title: this.getCardTitle(props.wand, 'Wand'),
      value: this.getCardValue(props.wand, 'Wand'),
      backgroundImage: this.getCardBackgroundImage(props.wand, 'Wand'),
      buttonText: this.getCardButtonText(props.wand, 'wand')
    });
    return cards;
  }

  getCardTitle(value, title) {
    const newTitle = (value !== '' && value !== null) ? `My ${title}` : '';
    return newTitle;
  }

  getCardButtonText(value, buttonText) {
    const newButtonText = (value !== '' && value !== null) ? `More about my ${buttonText}` : `Discover your ${buttonText}`;
    return newButtonText;
  }

  getCardValue(value, title) {
    let newValue;
    if (value !== '' && value !== null) {
      if (title === 'Wand') {
        newValue = `${value.wood} wood with ${value.core} core`;
      } 
      else {
        newValue = value;
      }
    } 
    else {
      switch (title) {
      case 'Hogwarts House':
        newValue = 'Join your Hogwarts House';
        break;
      case 'Patronus':
        newValue = 'Discover your Patronus';
        break;
      case 'Wand': 
        newValue = 'The Wand Ceremony';
        break;
      default:
        break;
      }
    }

    return newValue;
  }

  getCardBackgroundImage(value, title) {
    let backgroundImage;
    switch (title) {
    case 'Patronus':
      backgroundImage = require('../../assets/img/landing/patronus-background.png');
      break;
    case 'Wand': 
      backgroundImage = require('../../assets/img/landing/wand-background.jpg');
      break;
    default:
      if (value !== '') {
        backgroundImage = require(`../../assets/img/${value.toLowerCase()}/house-background.jpg`);
      }
      else {
        backgroundImage = require('../../assets/img/landing/house-background.jpg');
      }
      break;
    }

    return backgroundImage;
  }

  render() {
    const { cards } = this.state;
    const { house } = this.props;
    return (
      <section className='landing'>
        { cards.map((card, i) => {
          return (
            <LandingCard 
              key={i}
              title={card.title}
              value={card.value}
              reference={card.reference}
              buttonText={card.buttonText}
              backgroundImage={card.backgroundImage}
              house={ house }
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house,
    patronus: state.patronus,
    wand: state.wand
  };
};

const mapDispatchToProps = () => {
  return {};
};

Landing.propTypes = {
  house: PropTypes.string,
  patronus: PropTypes.string,
  wand: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));