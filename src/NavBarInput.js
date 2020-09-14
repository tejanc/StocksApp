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
        this.props.onChange(event)
    }

    componentDidMount() {
        this.focusTextInput()
    }

    render() {
        return (
            <div class="topnav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="#"><i class="fa fa-fw fa-pencil"></i> News</a>
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <a href="#"><i class="fa fa-fw fa-book"></i> About</a>
                <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                <div class="search-container">
                    <input type="text" placeholder='Search..' name={this.props.inputContentName} onKeyUp={this.handleChange}></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default NavBarInput;