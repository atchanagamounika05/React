import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMouseCord = (e) => {
    console.log("Class cordinates updating...");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMouseCord);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMouseCord);
  }

  render() {
    return (
      <div>
        X:set - {this.state.x}
        Y:set - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
