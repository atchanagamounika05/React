import React, { useState } from "react";
import ClassMouse from "./ClassMouse";
import FuncMouse from "./FuncMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Co-ordinates</button>
      {/* {display && <ClassMouse />} */}
      {display && <FuncMouse />}
    </div>
  );
}

export default MouseContainer;
