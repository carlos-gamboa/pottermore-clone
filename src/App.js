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
import Login from './components/login/Login';

class App extends Component {
  render() {
    const { house, showHeader } = this.props;

    const header = (showHeader) ? <Header house={house}></Header> : null;

    return (
      <React.Fragment>
        { header }
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/house' component={House}/>
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
    house: state.house,
    showHeader: state.showHeader
  };
};

const mapDispatchToProps = () => {
  return {};
};

App.propTypes = {
  house: PropTypes.string,
  showHeader: PropTypes.bool
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
