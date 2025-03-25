import React, { useReducer } from "react"; //1

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

function CounterOne() {
  // Step 3 - get value to render in JSX and find a way to call reducer func with appropriate action
  // useReducer returns it by default
  const [count, dispatch] = useReducer(reduce, intialState); //1
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
    </div>
  );
}

//useReducer - local state management
//useContext - provide value direct to nested comp without passing props to every comp on the path.

//
//                                    App (props) count- global state (useReducer + useContext)
//          ---------------------------------------------------------
//          .                          .                            .
//          .                          .                            .
//       Component A               ComponentB(props) ❌        ComponentC
//       (useReducer)                  .                            .
//                                 ComponentD(props)❌         ComponentE
//                                (useReducer)                      .
//                                                             ComponentF (useContext) ✅
//                                                             (useReducer)

export default CounterOne;
