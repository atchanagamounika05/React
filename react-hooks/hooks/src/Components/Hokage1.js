import React, { useContext } from "react";
import { CounterContext } from "../App";

function Hokage1() {
  const hContext = useContext(CounterContext);
  return (
    <div>
      Hokage1 - Count1 is {hContext.contextCount}
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

export default Hokage1;
