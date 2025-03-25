import React from "react";
import "./myStyles.css";

export default function Stylesheets(props) {
  console.log(props.primary);
  let classname = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${classname} font-xl`}>Stylesheets</h1>
    </div>
  );
}
