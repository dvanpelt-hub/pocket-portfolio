import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import Holdings from "../Holdings/Holdings";
import Login from "../Login/Login";
import "./NavDashboardAndHoldings.css";

export default class NavDashboardAndHoldings extends Component {
  render() {
    return (
      <>
      <div className="links">
          <Link className="homeLink" to="/">
            Home
          </Link>
          <Link className="dashboardLink" to="/dashboard">
            Dashboard
          </Link>
          <Link className="holdingsLink" to="/holdings">
            Holdings
          </Link>
          <Link className="loginLink" to="/login">
            Login
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/dashboard"
            render={() => {
              return (
                <Dashboard
                  tickerSymbol={this.props.tickerSymbol}
                  percentageROI={this.props.percentageROI}
                  valueROI={this.props.valueROI}
                  updateROI={this.props.updateROI}
                />
              );
            }}
          />
          <Route
            path="/holdings"
            render={() => {
              return (
                <Holdings
                  getStockPrice={this.props.getStockPrice}
                  updateStock={this.props.updateStock}
                  setQuantity={this.props.setQuantity}
                  setPurchasePrice={this.props.setPurchasePrice}
                  updateROI={this.props.updateROI}
                  tickerSymbol={this.props.tickerSymbol}
                  holdings={this.props.holdings}
                  percentageROI={this.props.percentageROI}
                  valueROI={this.props.valueROI}
                  quantity={this.props.quantity}
                  purchasePrice={this.props.purchasePrice}
                  currentPrice={this.props.currentPrice}
                />
              );
            }}
          />
          <Route path="/login" component={Login} />
        </Switch>
      </>
    );
  }
}
