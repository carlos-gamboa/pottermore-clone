import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Quiz.scss';
import Actions from '../../redux/actions/actions';
import TextCarousel from '../text-carousel/TextCarousel';

class Quiz extends Component {

  componentDidMount() {
    this.props.setShowHeader(false);
  }

  componentWillUnmount() {
    this.props.setShowHeader(true);
  }

  handleSelect(pointsTo) {
    this.props.onSelectAnswer(pointsTo);
  }

  render() {
    const { questionId, question, answers } = this.props;
    const backgroundImages = [];
    backgroundImages.push(require(`../../assets/img/house/${questionId}/front.png`));
    backgroundImages.push(require(`../../assets/img/house/${questionId}/middle.png`));
    backgroundImages.push(require(`../../assets/img/house/${questionId}/back.jpg`));

    const backgroundStyles = {
      backgroundImage: `url(${backgroundImages[0]}), url(${backgroundImages[1]}), url(${backgroundImages[2]})`
    };

    const backgroundColor = {
      backgroundColor: this.props.color
    };

    return (
      <section className='quiz'>
        <Link to='/' className='quiz__link'>Home</Link>
        <div className='quiz__question-container' style={backgroundStyles}>
          <p className='quiz__question'>{question}</p>
        </div>
        <div className='quiz__answer-container' style={backgroundColor}>
          <TextCarousel textArray={answers} onSelect={this.handleSelect.bind(this)}></TextCarousel>
        </div>
      </section>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowHeader: (showHeader) => {
      dispatch({type: Actions.SET_SHOW_HEADER, showHeader});
    }
  };
};

Quiz.propTypes = {
  questionId: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  color: PropTypes.string,
  onSelectAnswer: PropTypes.func,
  setShowHeader: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));
