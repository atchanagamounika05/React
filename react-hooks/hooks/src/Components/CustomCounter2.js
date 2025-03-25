import React, { useState } from "react";
import useCounter from "../Hooks/useCounter";

function CustomCounter2() {
  /* const [count, setCount] = useState(0); */
  /* 
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  }; */

  const [count, handleIncrement, handleDecrement, handleReset] = useCounter(
    10,
    10
  );

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CustomCounter2;
