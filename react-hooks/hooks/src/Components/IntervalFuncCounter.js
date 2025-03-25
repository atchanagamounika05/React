import React, { useState, useEffect } from "react";

function IntervalFuncCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log("ticking....");
    setCount((prevCount) => prevCount + 1);
  };
  // if we want to call a func in useEffect write the func in the useEffect directly to watch depandancies

  // If you think depandancy array is the way to specify when could we re-render the effect ❌
  // Depandancy array is the way to let react know everything that effect must watch for the updated changes ✅
  useEffect(() => {
    function doSomething() {
      console.log("Hai there");
    }
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); // add depandancy as [count] or add prevCount in tick method.

  // empty depandancy array tells react to ignore watching for the changes in count variable.

  return <div>{count}</div>;
}

export default IntervalFuncCounter;
