import React, { Component } from "react";

export class RenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <>
        <div>{this.props.children(this.state.count, this.handleClick)}</div>
        {/* <div>{this.props.render(this.state.count, this.handleClick)}</div> */}
        ;
      </>
    );
  }
}

export default RenderProps;
