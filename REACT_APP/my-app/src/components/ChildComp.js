import React from "react";

export default function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greet("child")}>Click</button>
    </div>
  );
}
