import React from "react";
import NavDashboardAndHoldings from "../NavDashboardAndHoldings/NavDashboardAndHoldings";
import './App.css';

class App extends React.Component {
  state = {
    tickerSymbol: "",
    percentageROI: null,
    valueROI: null,
    quantity: null,
    purchasePrice: null,
    currentPrice: null,
  };

  getStockPrice = (e) => {
    e.preventDefault();
    fetch(
      `https://twelve-data1.p.rapidapi.com/price?symbol=${this.state.tickerSymbol}&outputsize=30&format=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ENTER YOUR API KEY HERE",
          "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        this.setState({
          currentPrice: responseJson.price,
        })
      })
      .then(() => {
        this.updateROI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateStock = (e) => {
    e.preventDefault();
    this.setState({
      tickerSymbol: e.target.value,
    });
  };

  setQuantity = (e) => {
    e.preventDefault();
    this.setState({
      quantity: e.target.value,
    });
  };

  setPurchasePrice = (e) => {
    e.preventDefault();
    this.setState({
      purchasePrice: e.target.value,
    });
  };

  updateROI = () => {
    let initial = this.state.purchasePrice;
    let current = this.state.currentPrice;
    let quantity = this.state.quantity;

    let percentageROI = (((current - initial) / initial) * 100).toFixed(2) + "%";
    let valueROI = "$" + ((quantity * current) - (quantity * initial)).toFixed(2);
      console.log(valueROI);
    this.setState({
      percentageROI: percentageROI,
      valueROI: valueROI
    });
  };

  render() {
    return (
      <div className="App">
        <NavDashboardAndHoldings
          getStockPrice={this.getStockPrice}
          updateStock={this.updateStock}
          setQuantity={this.setQuantity}
          setPurchasePrice={this.setPurchasePrice}
          updateROI={this.updateROI}
          tickerSymbol={this.state.tickerSymbol}
          holdings={this.state.holdings}
          percentageROI={this.state.percentageROI}
          valueROI={this.state.valueROI}
          quantity={this.state.quantity}
          purchasePrice={this.state.purchasePrice}
          currentPrice={this.state.currentPrice}
        />
      </div>
    );
  }
}

export default App;
