import React, { useEffect, useState } from "react";

function FuncMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("mouse");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("effect");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X value - {x} Y value - {y}
    </div>
  );
}

export default FuncMouse;
