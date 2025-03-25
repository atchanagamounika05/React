import React, { useReducer } from "react"; //1

//multiple useReducers - dealing with multiple state variables that have same state transitions, use same reducer func with multiple useReducer func

// 2 define reduce and init state
const intialState = 0;
const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function CounterThree() {
  // Step 3 - get value to render in JSX and find a way to call reducer func with appropriate action
  // useReducer returns it by default
  const [count, dispatch] = useReducer(reduce, intialState); //1
  const [countTwo, dispatchTwo] = useReducer(reduce, intialState);
  return (
    <div>
      <div>Count is {count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <div>Count is {countTwo}</div>
      <button
        onClick={() => {
          dispatchTwo("increment");
        }}
      >
        Increment2
      </button>
      <button
        onClick={() => {
          dispatchTwo("decrement");
        }}
      >
        Decrement2
      </button>
      <button
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        Reset2
      </button>
    </div>
  );
}

export default CounterThree;
