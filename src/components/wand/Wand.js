import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Wand.scss';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import Quiz from '../quiz/Quiz';
import InfoCard from '../info-card/InfoCard';
import WandService from '../../services/wand-service';

class Wand extends Component {
  constructor() {
    super();
    this.state = {
      wandService: new WandService(),
      loadingData: true,
      questions: [],
      currentQuestionIndex: 0,
      points: 0
    };
  }

  componentDidMount() {
    this.setState({
      loadingData: false,
      questions: this.state.wandService.getWandQuestions()
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
    const wand = {
      wood: this.state.wandService.getWandWood(this.state.points),
      core: this.state.wandService.getWandCore(this.state.points),
    };
    this.props.setWand(wand);
  }

  render() {
    const { currentQuestionIndex, questions, loadingData } = this.state;
    let wand;
    if (!loadingData){
      wand = (this.props.wand)
        ?
        <div className='wand'>
          <div className='wand__container'>
            <p className='wand__title'>Your wand is made of <span className='wand__title--capitalize'>{this.props.wand.wood}</span> wood with a <span className='wand__title--capitalize'>{this.props.wand.core}</span> core</p>
          </div>
          <InfoCard title={this.props.wand.wood} description={this.state.wandService.getWandWoodInfo(this.props.wand.wood)}></InfoCard>
          <InfoCard title={this.props.wand.core} description={this.state.wandService.getWandCoreInfo(this.props.wand.core)}></InfoCard>
        </div>
        :
        <Quiz questionId={questions[currentQuestionIndex].id} question={questions[currentQuestionIndex].question} answers={questions[currentQuestionIndex].answers} color={questions[currentQuestionIndex].color} onSelectAnswer={this.handleAnswer.bind(this)}></Quiz>
      ;
    } 

    return (
      <React.Fragment>
        {loadingData ? null : wand}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wand: state.wand
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWand: (wand) => {
      dispatch({type: Actions.SET_WAND, wand});
    }
  };
};

Wand.propTypes = {
  wand: PropTypes.object,
  setWand: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wand));