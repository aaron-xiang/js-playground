import React from 'react';

function ButtonComponent(props) {
  return (
    <div>
      {(props.status === 0) ? <button className="stopwatch-btn" onClick={props.start}>Start</button> : ""}
      {(props.status === 1) ? <button className="stopwatch-btn" onClick={props.stop}>Stop</button> : ""}
      {(props.status === 2) ? <button className="stopwatch-btn" onClick={props.start}>Start</button> : ""}
      <button className="stopwatch-btn" onClick={props.reset}>Reset</button>
    </div>

  );
}

export default ButtonComponent;