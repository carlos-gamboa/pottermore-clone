import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './Sorting.scss';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import Quiz from '../quiz/Quiz';
import data from '../../assets/data/house-questions.json';

class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      questions: data.questions,
      currentQuestionIndex: 0,
      ravenclaw: 0,
      hufflepuff: 0,
      gryffindor: 0,
      slytherin: 0,
    };
  }

  handleAnswer(pointsTo) {
    const newState = this.state;
    newState[pointsTo] = newState[pointsTo] + 1;
    newState.currentQuestionIndex = newState.currentQuestionIndex + 1;
    if (newState.currentQuestionIndex === newState.questions.length) {
      this.getWinner();
    }
    this.setState({
      ...newState
    });
  }

  getWinner() {
    let maxPoints = 0;
    let winner = '';
    if (this.state.ravenclaw > maxPoints) {
      maxPoints = this.state.ravenclaw;
      winner = 'Ravenclaw';
    }
    if (this.state.hufflepuff > maxPoints) {
      maxPoints = this.state.hufflepuff;
      winner = 'Hufflepuff';
    }
    if (this.state.gryffindor > maxPoints) {
      maxPoints = this.state.gryffindor;
      winner = 'Gryffindor';
    }
    if (this.state.slytherin > maxPoints) {
      maxPoints = this.state.slytherin;
      winner = 'Slytherin';
    }
    this.props.setHouse(winner);
  }

  render() {
    const { currentQuestionIndex, questions } = this.state;

    const sorting = (currentQuestionIndex === questions.length)
      ?
      <div className='sorting__container'>
        <div className='sorting__image-container'>
          <img src={require(`../../assets/img/${this.props.house.toLowerCase()}/crest-large.png`)} alt={`${this.props.house} Crest`} className='sorting__image'/>
        </div>
        <p className='sorting__title'>You got {this.props.house}</p>
        <Link to='/house' className='sorting__button'>Learn More</Link>
      </div>
      :
      <Quiz questionId={questions[currentQuestionIndex].id} question={questions[currentQuestionIndex].question} answers={questions[currentQuestionIndex].answers} color={questions[currentQuestionIndex].color} onSelectAnswer={this.handleAnswer.bind(this)}></Quiz>
    ;

    return (
      <React.Fragment>
        {sorting}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHouse: (house) => {
      dispatch({type: Actions.SET_HOUSE, house});
    }
  };
};

Sorting.propTypes = {
  house: PropTypes.string,
  setHouse: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sorting));