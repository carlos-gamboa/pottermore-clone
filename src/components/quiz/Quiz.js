import React from 'react';
import PropTypes from 'prop-types';
import './Quiz.scss';
import TextCarousel from '../text-carousel/TextCarousel';

function Quiz(props) {
  const { questionId, question, answers } = props;

  function handleSelect(pointsTo) {
    props.onSelectAnswer(pointsTo);
  }

  const backgroundImages = [];
  backgroundImages.push(require(`../../assets/img/house/${questionId}/back.jpg`));
  backgroundImages.push(require(`../../assets/img/house/${questionId}/middle.png`));
  backgroundImages.push(require(`../../assets/img/house/${questionId}/front.png`));

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImages[0]}), url(${backgroundImages[1]}), url(${backgroundImages[2]})`
  };

  const backgroundColor = {
    backgroundColor: props.color
  };

  return (
    <section className='quiz'>
      <div className='quiz__question-container' style={backgroundStyles}>
        <p className='quiz__question'>{question}</p>
      </div>
      <div className='quiz__answer-container' style={backgroundColor}>
        <TextCarousel textArray={answers} onSelect={handleSelect}></TextCarousel>
      </div>
    </section>
  );
}

Quiz.propTypes = {
  questionId: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  color: PropTypes.string,
  onSelectAnswer: PropTypes.func
};

export default Quiz;
