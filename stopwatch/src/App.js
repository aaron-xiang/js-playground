import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import ButtonComponent from "./Components/ButtonComponent";
import StopWatch from "./Components/StopWatch";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  // return (
  //   <div className="main-section">
  //     <div className="clock">
  //       <div className="stopwatch">
  //         <Display time={time}/>
  //         <ButtonComponent status={status} reset={reset} stop={stop} start={start}/>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <StopWatch />
      <StopWatch />
    </div>
  );
}

export default App;
