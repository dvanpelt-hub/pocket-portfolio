import React, { Component } from "react";
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header>
          <h1>Pocket Portfolio Dashboard</h1>
        </header>
        <h2>{this.props.tickerSymbol}</h2>
        <h3>ROI:</h3>
        <p>{this.props.percentageROI}</p>
        <p>{this.props.valueROI}</p>
        <br />
        <button onClick={this.props.updateROI}>Update ROI</button>
      </div>
    );
  }
}
