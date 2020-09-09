'use strict';

import React from 'react';
import Plot from 'react-plotly.js';
import NavBarInput from './NavBarInput.js';

class Stock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartOpenValues: [],
      stockChartLowValues: [],
      stockChartHighValues: [],
      stockSymbol: 'AMZN',
      API: ''
    }
    this.stockSymbolRef = React.createRef();
  }

  componentDidMount() {
    this.fetchStock(this.state.stockSymbol);
  }

  async fetchStock(StockSymbol) {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    this.setState({
      API: API_Call
    })
    let stockChartXValuesFunction = [];
    let stockChartOpenValuesFunction = [];
    let stockChartLowValuesFunction = [];
    let stockChartHighValuesFunction = [];

    await fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartOpenValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            stockChartLowValuesFunction.push(data['Time Series (Daily)'][key]['2. low']);
            stockChartHighValuesFunction.push(data['Time Series (Daily)'][key]['3. high']);
          }

          console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartOpenValues: stockChartOpenValuesFunction,
            stockChartLowValues: stockChartLowValuesFunction,
            stockChartHighValues: stockChartHighValuesFunction
          })

        }
      )
      this.render()
  }

  handleInputChange = async (event) => {
    event.preventDefault()
    this.setState({
      stockSymbol: event.target.value
    })
    this.fetchStock(this.state.stockSymbol);
  }

  render() {

    const { stockSymbol } = this.state;
    const { API } = this.state;

    return (
      <div>

        <NavBarInput
          onChange={this.handleInputChange}
          value={this.state.stockSymbol}
          inputContentName='myContent'
        />

        <h1>Stock Symbol: {stockSymbol} </h1>
        {/* <p>Current API: {API}</p> */}

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartOpenValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'dark-blue' },
            }
          ]}
          layout={
            {
              title: 'Opening Prices', 
              width: 1080,
              height: 720 
            }
          }
        />

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartHighValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'dark-blue' },
            }
          ]}
          layout={
            {
              title: 'Stock Highs', 
              width: 1080,
              height: 720 
            }
          }
        />

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartLowValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'dark-blue' },
            }
          ]}
          layout={
            {
              title: 'Stock Lows', 
              width: 1080,
              height: 720 
            }
          }
        />

      </div>
    )
  }

}

export default Stock;