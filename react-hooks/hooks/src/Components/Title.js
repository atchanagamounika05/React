import React from "react";

function Title() {
  console.log("Title");
  return (
    <div>
      <h2>Title - UseCallback</h2>
    </div>
  );
}

export default React.memo(Title);
