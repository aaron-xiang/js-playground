import React, { Component } from "react";

const styles = {
  container: {
    border: "2px solid blue",
    margin: "auto",
    width: "150px"
  },
  display: {},
  control: {},
};

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export class StopWatch extends Component {
  state = {
    time: 0, //ms
    isStarted: false,
  };
  startTime = null;
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
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      const time = Date.now() - this.startTime;
      this.setState({ time, isStarted: true });
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
  min = (time) => Math.floor(time / 60 / 1000) % 60;
  sec = (time) => Math.floor(time / 1000) % 60;
  milli = (time) => time % 1000;
  render() {
    const { time, isStarted } = this.state;
    const hh = this.hour(time);
    const mm = pad(this.min(time), 2);
    const ss = pad(this.sec(time), 2);
    const ms = pad(this.milli(time), 3);
    return (
      <div style={styles.container}>
        <div style={styles.display}>{`${hh}:${mm}:${ss}:${ms}`}</div>
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
