import "./App.css";
import React, { useReducer } from "react";
import ClassCounter from "./Components/ClassCounter";
import ClassMouse from "./Components/ClassMouse";
import ClassUseEffect from "./Components/ClassUseEffect";
import ComponentC from "./Components/ComponentC";
import DataFetching from "./Components/DataFetching";
import FuncMouse from "./Components/FuncMouse";
import FunctionCounter from "./Components/FunctionCounter";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalFuncCounter from "./Components/IntervalFuncCounter";
import MouseContainer from "./Components/MouseContainer";
import PrevStateClass from "./Components/PrevStateClass";
import PrevStateFunc from "./Components/PrevStateFunc";
import UseEffectRender from "./Components/UseEffectRender";
import UseStateArray from "./Components/UseStateArray";
import UseStateObj from "./Components/UseStateObj";
import CounterOne from "./Components/CounterOne";
import CounterTwo from "./Components/CounterTwo";
import CounterThree from "./Components/CounterThree";
import Hokage1 from "./Components/Hokage1";
import Hokage2 from "./Components/Hokage2";
import Hokage3 from "./Components/Hokage3";
import DataFetchingOne from "./Components/DataFetchingOne";
import DataFetchingTwo from "./Components/DataFetchingTwo";
import ParentComponent from "./Components/ParentComponent";
import CounterMemo from "./Components/CounterMemo";
import FocusInput from "./Components/FocusInput";
import ClassTimer from "./Components/ClassTimer";
import HookTimer from "./Components/HookTimer";
import DocTitle1 from "./Components/DocTitle1";
import DocTitle2 from "./Components/DocTitle2";
import CustomCounter1 from "./Components/CustomCounter1";
import CustomCounter2 from "./Components/CustomCounter2";
import CustomInput1 from "./Components/CustomInput1";
import CustomInput2 from "./Components/CustomInput2";

//useContext
export const UserContext = React.createContext();
export const CourseContext = React.createContext();

//useContext + useReducer

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

export const CounterContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reduce, intialState);
  return (
    <div className="App">
      <CustomInput2 />
      <CustomInput1 />
      {/* <CustomCounter2 />
      <CustomCounter1 /> */}
      {/* <DocTitle2 />
      <DocTitle1 /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <CounterMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* ----------------------- */}
      {/* <CounterContext.Provider
        value={{ contextCount: count, contextDispatch: dispatch }}
      >
        <div>Count is {count}</div>
        <Hokage1 />
        <Hokage2 />
        <Hokage3 />
      </CounterContext.Provider> */}
      {/* ----------------------- */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value="Mounika">
        <CourseContext.Provider value="react">
          <ComponentC />
        </CourseContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalFuncCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <FuncMouse /> */}
      {/* <ClassMouse /> */}
      {/* <UseEffectRender /> */}
      {/* <ClassUseEffect /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObj /> */}
      {/* <PrevStateClass /> */}
      {/* <PrevStateFunc /> */}
      {/* <FunctionCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
