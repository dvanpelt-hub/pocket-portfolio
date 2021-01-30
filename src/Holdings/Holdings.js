import React from "react";
import dummyHoldings from "../App/dummyHoldings";
import StockSearch from '../StockSearch/StockSearch';
import "./Holdings.css"

export default class Holdings extends React.Component {
  state = {
    holdings: [],
    ROI: [],
    quantity: 0,
  };

  componentDidMount() {
    this.setState(dummyHoldings);
  }

  render() {
    const mapData = this.state.holdings.map((stock) => {
      return (
        <li key={stock.id}>
          {stock.TickerSymbol}, 
          Purchase Price: ${stock.PurchasePrice}, 
          Current Price: ${stock.CurrentPrice}, 
          ROI: {((stock.CurrentPrice-stock.PurchasePrice)/stock.PurchasePrice*100).toFixed(2)}%
        </li>
      );
    });
    return (
      <div>
        <header>
          <h2>Your Holdings:</h2>
        </header>
        <ul>{mapData}</ul>
        <div>
          <StockSearch quantity={this.state.quantity} />
        </div>
        <button onClick={this.mapData}>Update</button>
      </div>
    );
  }
}
