import React, { useState, useEffect } from "react";

function UseEffectRender() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Hoi");
    document.title = `you have clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click me :{count}</button>
    </div>
  );
}

export default UseEffectRender;
