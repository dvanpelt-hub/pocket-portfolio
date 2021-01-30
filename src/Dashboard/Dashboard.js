import React, { Component } from "react";

export default class Dashboard extends Component {

  render() {
    // calculateROI = () => {
    //   this.state.ROI
    // }
    return (
      <div>
        <header>
          <h1>Pocket Portfolio Dashboard</h1>
        </header>
        <h3>ROI: </h3>
        <p>
          [<em>placeholder for ROI snapshot.</em>]
        </p>
      </div>
    );
  }
}
