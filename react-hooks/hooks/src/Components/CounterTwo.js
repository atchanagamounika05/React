import React, { useReducer } from "react"; //1

//ACTIONS and STATES as OBJECTS

// 2 define reduce and init state
const intialState = { firstVar: 0, secondVar: 10 };
const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstVar: state.firstVar + action.value };
    case "decrement":
      return { ...state, firstVar: state.firstVar - action.value };
    // second state
    case "increment2":
      return { ...state, secondVar: state.secondVar + action.value };
    case "decrement2":
      return { ...state, secondVar: state.secondVar - action.value };
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function CounterTwo() {
  // Step 3 - get value to render in JSX and find a way to call reducer func with appropriate action
  // useReducer returns it by default
  const [count, dispatch] = useReducer(reduce, intialState); //1
  return (
    <div>
      <div>Count is {count.firstVar}</div>
      <div>Count is {count.secondVar}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 3 });
        }}
      >
        IncrementSecondVar
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 3 });
        }}
      >
        DecrementSecondVar
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
