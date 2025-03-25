import React, { useState } from "react";

function useCounter(initialVal = 0, value) {
  const [count, setCount] = useState(initialVal);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + value);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const handleReset = () => {
    setCount(0);
  };
  return [count, handleIncrement, handleDecrement, handleReset];
}

export default useCounter;
