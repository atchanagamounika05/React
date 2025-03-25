import React, { Component } from "react";

export class PrevStateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.incrementFive}>Increment Five</button>
      </div>
    );
  }
}

export default PrevStateClass;
