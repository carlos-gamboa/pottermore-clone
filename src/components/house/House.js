import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './House.scss';
import PropTypes from 'prop-types';
import Actions from '../../redux/actions/actions';
import Trait from '../trait/Trait';
import HouseService from '../../services/house-service';

class House extends Component {

  constructor() {
    super();
    this.state = {
      loadingData: true,
      houseService: new HouseService(),
      houseBackground: ''
    };
  }

  componentDidMount() {
    if (this.props.house !== '') {
      this.props.setHouseData(this.state.houseService.getHouseData(this.props.house.toLowerCase()));
      this.setState({
        houseBackground: require(`../../assets/img/${this.props.house.toLowerCase()}/house-background.jpg`),
        loadingData: false
      });
    }
  }

  render() {
    const { house, houseData } = this.props;

    let houseContent;
    if (!this.state.loadingData) {
      houseContent = (house !== '') 
        ? 
        <div className='house__main'>
          <div className='house__introduction' style={{
            backgroundImage: 'url(' + this.state.houseBackground + ')'
          }}>
            <h1 className='house__heading'>{house}</h1>
            { houseData.introduction.map((paragraph, i) => {
              return (
                <p className='house__text' key={i}>{paragraph}</p>
              );
            })}
          </div>
          <div className='house__traits-container'>
            { houseData.traits.map((trait, i) => {
              return (
                <Trait key={i} trait={trait} house={house}></Trait>
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
    }

    return (
      <section className='house'>
        {houseContent}
      </section>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    house: state.house,
    houseData: state.houseData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHouseData: (houseData) => {
      dispatch({type: Actions.SET_HOUSE_DATA, houseData});
    }
  };
};

House.propTypes = {
  house: PropTypes.string,
  houseData: PropTypes.object,
  setHouseData: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(House));