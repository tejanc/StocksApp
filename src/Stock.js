import React from 'react';
import { Component } from 'react'
import Plot from 'react-plotly.js';

class NavBarInput extends Component {

  constructor(props) {
    super(props)
    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }

  handleChange = (event) => {
    if (this.props.onChange) this.props.onChange(event)
  }
  componentDidMount() {
    this.focusTextInput()
  }

  render() {
    return (
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <p><textarea placeholder='Stocks (e.g. AMZN)' name={this.props.inputContentName} onChange={this.handleChange}></textarea></p>
      </div>
    )
  }
}

class Stock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockSymbol: 'AMZN'
    }
    this.stockSymbolRef = React.createRef()
  }

  componentDidMount() {
    this.fetchStock(this.state.stockSymbol);
  }

  fetchStock(StockSymbol) {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
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
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          })

        }
      )
  }

  handleInputChange = async (event) => {
    event.preventDefault()
    this.setState({
      stockSymbol: event.target.value
    })

    this.fetchStock(this.state.stockSymbol);
    this.render();
  }

  render() {

    const { stockSymbol } = this.state;

    return (
      <div>

        <NavBarInput
          onChange={this.handleInputChange}
          value={this.state.stockSymbol}
          inputContentName='myContent'
        />

        <h1>Stock Market</h1>

        <p>Current Stock: {stockSymbol}</p>

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'dark-blue' },
            }
          ]}
          layout={{ width: 1080, height: 720, title: 'Stock Opening Prices' }}
        />
      </div>
    )
  }

}

export default Stock;