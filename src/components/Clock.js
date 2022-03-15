import { React, Component } from 'react';

class Clock extends Component {
  constructor(props) {
    console.log("constructor() called.");
    super(props);
    this.state.datetime = {time : new Date()};
  }

  componentDidMount() {
    console.log("componentDidMount() called.");
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() called.");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick() called.");
    this.setState({
      datetime : {time : new Date()}
    });
  }

  state = {
    data : "here is some data"
  };
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.datetime.time.toLocaleTimeString()}</h2>
        <h2>Data from State : {this.state.data} </h2>
      </div>
    );
  }
}

export default Clock;