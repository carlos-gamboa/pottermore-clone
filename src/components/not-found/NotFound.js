import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Actions from '../../redux/actions/actions';
import PropTypes from 'prop-types';
import './NotFound.scss';
import ReactSVG from 'react-svg';

class NotFound extends Component {

  componentDidMount() {
    this.props.setShowHeader(false);
  }

  componentWillUnmount() {
    this.props.setShowHeader(true);
  }

  render() {
    const traitIcon = require('../../assets/img/icons/not-found.svg');

    return (
      <section className='not-found'>
        <div className='not-found__icon-container'>
          <ReactSVG src={traitIcon} svgStyle={{ fill: 'currentColor' }} className='not-found__icon' />
        </div>
        <div className='not-found__container'>
          <h1 className='not-found__title'>404 Page Not Found</h1>
          <Link to='/' className='not-found__button'>Back to Hogwarts</Link>
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

NotFound.propTypes = {
  setShowHeader: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotFound));
