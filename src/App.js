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
import Register from './components/register/Register';
import PrivateRoute from './components/private-route/PrivateRoute';
import NotFound from './components/not-found/NotFound';

class App extends Component {
  
  render() {
    const { house, showHeader } = this.props;

    const header = (showHeader) ? <Header house={house}></Header> : null;

    return (
      <React.Fragment>
        { header }
        <Switch>
          <PrivateRoute exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/house' component={House}/>
          <PrivateRoute exact path='/patronus' component={Patronus} />
          <PrivateRoute exact path='/wand' component={Wand} />
          <PrivateRoute exact path='/sorting' component={Sorting} />
          <PrivateRoute exact path='/spells' component={SpellList} />
          <Route component={NotFound} />
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
