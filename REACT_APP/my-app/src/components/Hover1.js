import React, { Component } from "react";

export class Hover1 extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleMovement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }; */
  render() {
    const { count, handleFunc } = this.props;
    return (
      <div>
        {/* <h1 onMouseOver={this.handleMovement}>
          Hovered {this.state.count} times
        </h1> */}

        <h1 onMouseOver={handleFunc}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default Hover1;
