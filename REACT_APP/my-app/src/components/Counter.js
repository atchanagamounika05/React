import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    // this.state.count = this.state.count + 1; updated in console but in UI
    /*  this.setState(
      {
        count: this.state.count + 1, // console shows num -1 it updates after render as it is async rn
      },
      () => {
        console.log("Inside", this.state.count);
      }
    ); */

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count); // sync action
  }

  handleIncrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.handleIncrementFive();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
