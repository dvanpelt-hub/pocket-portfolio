import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import Holdings from '../Holdings/Holdings';
import Login from '../Login/Login';

export default class NavDashboardAndHoldings extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <nav>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
        <nav>
          <Link to='/holdings'>Holdings</Link>
        </nav>        
        <nav>
          <Link to='/login'>Login</Link>
        </nav>
        <div>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <Route
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            path='/holdings'
            component={Holdings}
          />
          <Route
            path='/login'
            component={Login}
          />
        </div>
      </>
    )
  }
}
