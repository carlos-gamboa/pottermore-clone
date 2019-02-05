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
    cards.push(this.getCard(props.house, 'Hogwarts House', '/house', 'house'));
    cards.push(this.getCard(props.patronus, 'Patronus', '/patronus', 'patronus'));
    cards.push(this.getCard(props.wand, 'Wand', '/wand', 'wand'));
    return cards;
  }

  getCard(value, title, reference, buttonText) {
    const card = {
      reference: reference
    };

    //Set the static background images
    switch (title) {
    case 'Patronus':
      card.backgroundImage = require('../../assets/img/landing/patronus-background.png');
      break;
    case 'Wand': 
      card.backgroundImage = require('../../assets/img/landing/wand-background.jpg');
      break;
    default:
      break;
    }

    // Set card data when there's a value
    if (value !== '') {
      card.title = `My ${title}`;
      card.value = value;
      card.buttonText = `More about my ${buttonText}`;

      // Set dynamic background of house
      if (title === 'Hogwarts House') {
        card.backgroundImage = require(`../../assets/img/${value.toLowerCase()}/house-background.jpg`);
      }
    } 
    else {
      card.title = '';
      card.buttonText = `Discover your ${buttonText}`;

      // Set the value and dynamic image of cards when there's no value
      switch (title) {
      case 'Hogwarts House':
        card.value = 'Join your Hogwarts House';
        card.backgroundImage = require('../../assets/img/landing/house-background.jpg');
        break;
      case 'Patronus':
        card.value = 'Discover your Patronus';
        break;
      case 'Wand': 
        card.value = 'The Wand Ceremony';
        break;
      default:
        break;
      }
    }
    return card;
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
  wand: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));