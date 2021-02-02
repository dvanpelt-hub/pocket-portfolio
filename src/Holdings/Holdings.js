import React from "react";
import StockSearch from "../StockSearch/StockSearch";
import "./Holdings.css";

export default class Holdings extends React.Component {
  // handleNewStock = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  render() {
    // This will be used once database has been created
    // const mapData = this.state.holdings.map((stock) => {
    //   return (
    //     <li key={stock.id}>
    //       {stock.TickerSymbol}, Purchase Price: ${stock.PurchasePrice}, Current
    //       Price: ${stock.CurrentPrice}, ROI:{" "}
    //       {(
    //         ((stock.CurrentPrice - stock.PurchasePrice) / stock.PurchasePrice) *
    //         100
    //       ).toFixed(2)}
    //       %
    //     </li>
    //   );
    // });
    return (
      <div className="holdings">
        <header>
          <h2>Your Current Position:</h2>
        </header>
        <ul className="holdingsList">
          <li>Ticker Symbol: {this.props.tickerSymbol}</li>
          <li># of shares: {this.props.quantity}</li>
          <li>Purchase Price: {this.props.purchasePrice}</li>
          <li>Current Price: {this.props.currentPrice}</li>
          <li>ROI (%): {this.props.percentageROI}</li>
          <li>Gain/Loss: {this.props.valueROI}</li>
          <button onClick={this.props.updateROI}>Update ROI</button>
        </ul>
        <div>
          <StockSearch
            getStockPrice={this.props.getStockPrice}
            updateStock={this.props.updateStock}
            setQuantity={this.props.setQuantity}
            setPurchasePrice={this.props.setPurchasePrice}
            quantity={this.props.quantity}
            tickerSymbol={this.props.tickerSymbol}
          />
        </div>
      </div>
    );
  }
}
