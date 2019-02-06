import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import House from './components/house/House';
import Patronus from './components/patronus/Patronus';
import Wand from './components/wand/Wand';
import Sorting from './components/sorting/Sorting';
import SpellList from './components/spell-list/SpellList';

class App extends Component {
  render() {
    const { house } = this.props;

    return (
      <React.Fragment>
        <Header house={house}></Header>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/house' render={() => (
            <House house={house}></House>
          )}/>
          <Route exact path='/patronus' component={Patronus} />
          <Route exact path='/wand' component={Wand} />
          <Route exact path='/sorting' component={Sorting} />
          <Route exact path='/spells' component={SpellList} />
          <Route render={() => <h1 className='heading__primary' style={{marginTop: '10rem'}}>404 NOT FOUND</h1>}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house
  };
};

const mapDispatchToProps = () => {
  return {};
};

App.propTypes = {
  house: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
