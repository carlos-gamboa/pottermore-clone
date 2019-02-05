import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextCarousel.scss';
import Dot from './dot/Dot';

class TextCarousel extends Component {

  constructor() {
    super();
    this.state = {
      answerIndex: 0
    };
  }

  handleArrowUp(event) {
    event.preventDefault();
    this.setState({
      answerIndex: (this.state.answerIndex === 0 ? this.props.textArray.length - 1 : this.state.answerIndex - 1)
    });
  }

  handleArrowDown(event) {
    event.preventDefault();
    this.setState({
      answerIndex: (this.state.answerIndex === this.props.textArray.length - 1 ? 0 : this.state.answerIndex + 1)
    });
  }

  handleDotSelect(index) {
    this.setState({
      answerIndex: index
    });
  }

  handleAnswerSelect(event) {
    event.preventDefault();
    const selectedIndex = this.state.answerIndex;
    this.setState({
      answerIndex: 0
    });
    this.props.onSelect(this.props.textArray[selectedIndex].points);
  }

  render() {
    const { textArray } = this.props;
    const { answerIndex } = this.state;
    return (
      <div className='text-carousel'>
        <div className='text-carousel__main'>
          <div className='text-carousel__arrow-container'>
            <button className='text-carousel__arrow' onClick={(event) => {
              this.handleArrowUp(event);
            }}><i className='material-icons text-carousel__icon'>keyboard_arrow_up</i></button>
          </div>
          <div className='text-carousel__content'>
            <p className='text-carousel__text'>{textArray[answerIndex].text}</p>
          </div>
          <div className='text-carousel__arrow-container'>
            <button className='text-carousel__arrow' onClick={(event) => {
              this.handleArrowDown(event);
            }}><i className='material-icons text-carousel__icon'>keyboard_arrow_down</i></button>
          </div>
          <button className='text-carousel__button' onClick={(event) => {
            this.handleAnswerSelect(event);
          }}>Select</button>
        </div>
        <div className='text-carousel__dots'>
          { textArray.map((text, i) => {
            return (
              <Dot 
                key={i}
                dotIndex={i}
                isSelected={i === answerIndex}
                onSelect={this.handleDotSelect.bind(this)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

TextCarousel.propTypes = {
  textArray: PropTypes.array,
  onSelect: PropTypes.func
};

export default TextCarousel;
