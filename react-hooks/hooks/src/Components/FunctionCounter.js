import React, { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </>
    </div>
  );
}

export default FunctionCounter;
