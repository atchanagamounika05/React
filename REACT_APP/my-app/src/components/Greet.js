import React from "react";

/* function Greet() {
  return <h1> Hai Mounika</h1>;
} */

const Greet = (props) => {
  return (
    <>
      <h1> Hai {props.name}</h1>
      {props.children}
    </>
  );
};

//named export - export const Greet = () => <h1> Hai Mounika</h1>
//named export should use exactly same name while export - otherwise causes error - does not contain  default export
// import {Greet} from "./components/Greet"

export default Greet;
