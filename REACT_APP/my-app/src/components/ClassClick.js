import React, { Component } from "react";

export class ClassClick extends Component {
  handleClick() {
    console.log("clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
