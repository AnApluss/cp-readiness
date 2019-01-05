import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Timer extends Component {
 
  state = {
    clickCounter: 0,
    currentTimestamp: new Date(),
  };

  handleClick = () => {
    this.setState((prevState) => {
    return { clickCounter: prevState.clickCounter + 1 };
    });
  };

  componentDidMount() {
  setInterval(() => {
    this.setState({ currentTimestamp: new Date() })
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, {this.props.name}!</h1>
        <button onClick={this.handleClick}>Click</button>
        <p>Clicked: {this.state.clickCounter}</p>
        <p className="bold-n-big">Time: {this.state.currentTimestamp.toLocaleString()}</p>
      </div>
    );
  }

}

export default Timer;