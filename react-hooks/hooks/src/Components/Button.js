import React from "react";

function Button({ handleIncrement, children }) {
  console.log("Button", children);
  return (
    <div>
      Button - Component
      <button onClick={handleIncrement}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
