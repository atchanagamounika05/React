import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetHandler = this.greetHandler.bind(this);
  }
  greetHandler(childName) {
    alert(`hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComp greet={this.greetHandler} />
      </div>
    );
  }
}

export default ParentComp;
