import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class Context3 extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}!</div>;
        }}
      </UserConsumer>
    );
  }
}

export default Context3;
