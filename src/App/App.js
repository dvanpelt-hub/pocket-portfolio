import React from 'react';
// import {Route, Link} from 'react-router-dom';
// import LandingPage from '../LandingPage/LandingPage';
import NavDashboardAndHoldings from '../NavDashboardAndHoldings/NavDashboardAndHoldings';
// // import Login from './Login/Login';
// import Holdings from '../Holdings/Holdings';
// // import Dashboard from './Dashboard/Dashboard';

class App extends React.Component {

  state = {
    holdings: [],
    ROI: []
  }

  render() {
    return (
      <div className='App'>
        <NavDashboardAndHoldings />
        <h1>Pocket Portfolio!</h1>
      </div>
    );
  }
}

export default App;