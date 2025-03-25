import React from "react";

/* function FRInput() {
  return <div><input /></div>;
} */

const FRInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} />
    </>
  );
});

export default FRInput;
