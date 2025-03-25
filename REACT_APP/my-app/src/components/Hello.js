import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome",
    };
  }
  handleChange() {
    this.setState({
      message: "Thank you",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleChange()}>Click Me</button>
      </>
    );
  }
}

export default Hello;
