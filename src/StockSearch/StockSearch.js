import React, { Component } from "react";
import './StockSearch.css'

export default class StockSearch extends Component {
  render() {
    return (
      <div>
        <form 
          className="stockForm"
          onSubmit={this.props.getStockPrice}>
          <h3>Add a new position</h3>
          <input
            onChange={this.props.updateStock}
            type="text"
            name="stock-search"
            id="stock-search"
            placeholder="ticker symbol ex: GOOGL"
          />
          <br />
          <input
            onChange={this.props.setQuantity}
            type="number"
            name="quantity"
            id="stock-quantity"
            placeholder="# of shares"
          />
          <br />
          <input
            onChange={this.props.setPurchasePrice}
            type="number"
            name="purchasePrice"
            placeholder="Enter purchase price"
          />
          <br />
          <button type="submit">Change!</button>
        </form>
      </div>
    );
  }
}