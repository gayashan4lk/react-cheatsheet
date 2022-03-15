import { React, Component } from 'react';

class Clock extends Component {
  state = {
    data : "here is some data"
  };
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
        <h2>Data from State : {this.state.data} </h2>
        {console.log(this.state)}
      </div>
    );
  }
}

export default Clock;