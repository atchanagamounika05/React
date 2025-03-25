import React from "react";

export default function FunctionClick() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
