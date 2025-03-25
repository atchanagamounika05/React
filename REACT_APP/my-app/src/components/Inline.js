import React from "react";

function Inline() {
  const heading = {
    fontSize: "60px",
    color: "blue",
  };
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 style={heading}>Inline</h1>
      {/* <h1 className={styles.success}>Hawai</h1> //error */}
    </div>
  );
}

export default Inline;
