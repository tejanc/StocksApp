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
            stockChartHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            stockChartLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
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
              name: this.state.stockSymbol + ' Open',
              x: this.state.stockChartXValues,
              y: this.state.stockChartOpenValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#5e5351' },
            },
            {
              name: this.state.stockSymbol + ' High',
              x: this.state.stockChartXValues,
              y: this.state.stockChartHighValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#6eabbf' },
            },
            {
              name: this.state.stockSymbol + ' Low',
              x: this.state.stockChartXValues,
              y: this.state.stockChartLowValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#f00a31' },
            }
            
          ]}
          layout={
            {
              title: 'Prices',
              width: 1080,
              height: 720,
              xaxis: {
                autorange: true,
                rangeselector: {
                  buttons: [
                    {
                      count: 1,
                      label: '1m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 3,
                      label: '3m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 6,
                      label: '6m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 1,
                      label: '1y',
                      step: 'year',
                      stepmode: 'backward'
                    },
                    {
                      count: 5,
                      label: '5y',
                      step: 'year',
                      stepmode: 'backward'
                    },
                    { step: 'all' }
                  ]
                },
                rangeslider: { range: [] },
                type: 'date'
              }
            }
          }
        />

      </div>
    )
  }

}

export default Stock;