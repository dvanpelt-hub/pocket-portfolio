import React, { Component } from 'react'

export default class StockSearch extends Component {

  state={
    holdings: [],
    ROI: [],
    quantity: 0,
  }

  handleAddStock = (e) => {
    e.preventDefault();
    this.setState={
      quantity: e.target
    }
    console.log(e.target[1].value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddStock}>
          <h3>Add a new position</h3>
          <input type="text" name="stock-search" id="stock-search" placeholder="ex: GOOGL" />
          <br />
          <input type="number" name="quantity" id="stock-quantity" placeholder="0" />
          <br />
          <button type="submit">Add stock!</button>
        </form>
      </div>
    )
  }
}

//LEFT OFF HERE. NEED TO ADD QUANTITY AND CALCULATE TOTAL ROI FOR STATE//