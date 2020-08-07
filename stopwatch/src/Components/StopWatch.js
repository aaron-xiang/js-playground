import React, { Component } from "react";

const styles = {
  container: {},
  display: {},
  control: {},
};

export class StopWatch extends Component {
  state = {
    time: 0, //ms
    isStarted: false,
  };
  interval = null;
  handleClick = () => {
    const { isStarted } = this.state;
    if (isStarted) {
      this.stop();
    } else {
      this.start();
    }
  };
  start = () => {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1, isStarted: true });
    }, 1);
  };
  stop = () => {
    clearInterval(this.interval);
    this.setState({ isStarted: false });
  };
  reset = () => {
    clearInterval(this.interval);
    this.setState({ time: 0, isStarted: false });
  };
  hour = (time) => Math.floor(time / 3600 / 1000);
  render() {
    const { time, isStarted } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.display}>{time}</div>
        <div style={styles.control}>
          <button onClick={this.handleClick}>
            {isStarted ? "Stop" : "Start"}
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
