import React, { useContext } from "react";
import { CounterContext } from "../App";

function Hokage6() {
  const hContext = useContext(CounterContext);
  return (
    <div>
      Hokage6 - Count1 is {hContext.contextCount}
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

export default Hokage6;
