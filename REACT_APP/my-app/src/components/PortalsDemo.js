import React from "react";
import ReactDom from "react-dom";

function PortalsDemo() {
  return ReactDom.createPortal(
    <h1>Portal Component</h1>,
    document.getElementById("portals-root")
  );
}

export default PortalsDemo;
