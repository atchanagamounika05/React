import React from "react";

function Count({ text, count }) {
  console.log(`Count ${text}`);
  return (
    <div>
      Count Component - {text} - {count}
    </div>
  );
}

export default React.memo(Count);
