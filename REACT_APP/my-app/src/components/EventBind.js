import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    /* this.clickHandler = this.clickHandler.bind(this); */
  }

  /*  clickHandler() {
    this.setState({
      message: "Bye",
    });
  } */

  clickHandler = () => {
    this.setState({
      message: "Bye",
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default EventBind;
