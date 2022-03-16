import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : "start"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("button clicked");
    console.log(this);
    this.setState({data2 : "button clicked"});
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Submit
      </button>
    );
  }
}

export default Button;