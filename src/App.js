import { useState } from "react";
import "./App.css";

const modeObject = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
};

function App() {
  const [counter, setCounter] = useState(0);
  const [mode, setMode] = useState(modeObject.INITIAL);

  const [intervalId, setIntervalId] = useState(null);

  let startCounter = () => {
    const localIntervalid = setInterval(() => {
      setCounter((oldValue) => oldValue + 1);
    }, 1000);
    setIntervalId(localIntervalid);
  };

  let stopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const onStart = () => {
    if (mode === modeObject.RUNNING) return;
    setMode(modeObject.RUNNING);
    startCounter();
  };

  const onResume = () => {
    if (mode === modeObject.RUNNING) return;
    setMode(modeObject.RUNNING);
    startCounter();
  };

  const onPause = () => {
    if (mode === modeObject.PAUSED) return;
    setMode(modeObject.PAUSED);
    stopCounter();
  };

  const onReset = () => {
    setCounter(0);
    setMode(modeObject.INITIAL);
    stopCounter();
  };

  return (
    <div className="container">
      <div className="counter">Counter: {counter}</div>
      <button
        className="button"
        onClick={mode === mode.PAUSED ? onResume : onStart}
      >
        START
      </button>
      <button className="button" onClick={onPause}>
        PAUSE
      </button>
      <button className="button" onClick={onReset}>
        RESET
      </button>
    </div>
  );
}

export default App;
