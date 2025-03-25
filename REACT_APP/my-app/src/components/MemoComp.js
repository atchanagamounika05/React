import React from "react";

function MemoComp({ name }) {
  console.log("MemoComp render");
  return <div>MemoComp {name}</div>;
}

export default React.memo(MemoComp);
