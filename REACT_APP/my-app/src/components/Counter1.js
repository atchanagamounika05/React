import React, { Component } from "react";

export class Counter1 extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }; */

  render() {
    const { count, handleFunc } = this.props;
    console.log("handleFunc", handleFunc);
    return (
      <div>
        <button onClick={handleFunc}>Clicked {count} times</button>
      </div>
    );
  }
}

export default Counter1;
