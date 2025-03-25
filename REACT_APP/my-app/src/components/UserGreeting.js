import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //#1 if-else
    /* if (this.state.isLoggedIn) {
      return <div>Hai</div>;
    } else {
      return <div>Bye</div>;
    } */
    //#2 element variables
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Hai</div>;
    } else {
      message = <div>Bye</div>;
    }
    return <div>{message}</div>; */
    //#3 conditional operator
    /* return this.state.isLoggedIn ? <div>Hai</div> : <div>Bye</div>; */
    //#4 short circut operator
    return this.state.isLoggedIn && <div>Hai</div>;
  }
}

export default UserGreeting;
