import React, { useState } from "react";

function PrevStateFunc() {
  const intiCount = 0;
  const [count, setCount] = useState(intiCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(intiCount)}>Reset</button>
      {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> wrong instead of passing value pass the function that has access to whole state value */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
}

export default PrevStateFunc;
