import React, { Component } from "react";
import Context2 from "./Context2";

export class Context1 extends Component {
  render() {
    return (
      <div>
        Component1
        <Context2 />
      </div>
    );
  }
}

export default Context1;
