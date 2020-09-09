import { Component } from 'react';
import React from 'react';

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
          <p><textarea placeholder='Stock Symbol (e.g. AMZN)' name={this.props.inputContentName} onChange={this.handleChange}></textarea></p>
        </div>
      )
    }
  }

  export default NavBarInput;