import React, { useState, useRef } from 'react';
import '../css/Timer.css';
import "../css/common.css"

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      setTime(0);
    }
  };

  return (
    <div className="timer">
      <div className="timerDisplay">
        {new Date(time * 1000).toISOString().substr(11, 8)}
      </div>
      <div className="timerButtons">
        <button onClick={startTimer} className="darkBtn" id="startBtn">START TIMER</button>
        <button onClick={stopTimer} className="lightBtn" id="stopBtn">STOP TIMER</button>
      </div>
    </div>
  );
};

export default Timer;
