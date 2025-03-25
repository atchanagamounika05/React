import React, { useContext } from "react";
import { CounterContext } from "../App";

function Hokage4() {
  const hContext = useContext(CounterContext);
  return (
    <div>
      Hokage4 - Count1 is {hContext.contextCount}
      <button
        onClick={() => {
          hContext.contextDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          hContext.contextDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          hContext.contextDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Hokage4;
