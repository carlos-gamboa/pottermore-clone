import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Patronus.scss';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import Quiz from '../quiz/Quiz';
import InfoCard from '../info-card/InfoCard';
import PatronusService from '../../services/patronus-service';

class Patronus extends Component {
  constructor() {
    super();
    this.state = {
      patronusService: new PatronusService(),
      loadingData: true,
      questions: [],
      currentQuestionIndex: 0,
      points: 0
    };
  }

  componentDidMount() {
    this.setState({
      loadingData: false,
      questions: this.state.patronusService.getPatronusQuestions()
    });
  }

  handleAnswer(newPoints) {
    const newState = this.state;
    newState.points = newState.points + parseInt((Math.random() * parseInt(newPoints)));
    newState.currentQuestionIndex = newState.currentQuestionIndex + 1;

    if (newState.currentQuestionIndex === newState.questions.length) {
      this.getWinner();
    }

    this.setState({
      ...newState
    });
  }

  getWinner() {
    const patronus = this.state.patronusService.getPatronus(this.state.points);
    this.props.setPatronus(patronus);
  }

  shouldAddN(stringToValidate) {
    return stringToValidate.toLowerCase().startsWith('a') || 
    stringToValidate.toLowerCase().startsWith('e') ||
    stringToValidate.toLowerCase().startsWith('i') || 
    stringToValidate.toLowerCase().startsWith('o');
  }

  render() {
    const { currentQuestionIndex, questions, loadingData } = this.state;
    const patronusDescription = 'The Patronus is the most famous (and famously difficult) defensive charm. The aim is to produce a silvery-white guardian or protector, which takes the form of an animal. The exact form of the Patronus will not be apparent until the spell has been successfully cast. One of the most powerful defensive charms known to wizardkind, the Patronus can also be used as a messenger between wizards. As a pure, protective magical concentration of happiness and hope (the recollection of a single talisman memory is essential in its creation) it is the only spell effective against Dementors. The majority of witches and wizards are unable to produce Patronuses and to do so is generally considered a mark of superior magical ability.';

    let patronus;
    if (!loadingData){
      patronus = (this.props.patronus !== '')
        ?
        <div className='patronus'>
          <div className='patronus__container'>
            <p className='patronus__title'>Your Patronus is a{this.shouldAddN(this.props.patronus) ? 'n' : null} {this.props.patronus}</p>
          </div>
          <InfoCard details={true} title='Patronus Charm' author={true} description={patronusDescription}></InfoCard>
        </div>
        :
        <Quiz questionId={questions[currentQuestionIndex].id} question={questions[currentQuestionIndex].question} answers={questions[currentQuestionIndex].answers} color={questions[currentQuestionIndex].color} onSelectAnswer={this.handleAnswer.bind(this)}></Quiz>
      ;
    }

    return (
      <React.Fragment>
        {loadingData ? null : patronus}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patronus: state.patronus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPatronus: (patronus) => {
      dispatch({type: Actions.SET_PATRONUS, patronus});
    }
  };
};

Patronus.propTypes = {
  patronus: PropTypes.string,
  setPatronus: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Patronus));