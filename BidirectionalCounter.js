import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" or "down"
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isCounting) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (direction === "up") {
            if (prevCount >= 10) {
              setDirection("down");
              return prevCount - 1;
            }
            return prevCount + 1;
          } else {
            if (prevCount <= 0) {
              setDirection("up");
              return prevCount + 1;
            }
            return prevCount - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isCounting, direction]);

  const start = () => {
    if (!isCounting) {
      setIsCounting(true);
    }
  };

  const stop = () => {
    setIsCounting(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setIsCounting(false);
    clearInterval(intervalRef.current);
    setCount(0);
    setDirection("up");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <div style={{ marginTop: "20px" }}>
        <button onClick={start} style={{ marginRight: "10px" }}>
          Start
        </button>
        <button onClick={stop} style={{ marginRight: "10px" }}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
