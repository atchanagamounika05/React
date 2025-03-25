import React, { Component /*  PureComponent */ } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class PureParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mounika",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Mounika",
      });
    }, 2000);
  }

  render() {
    console.log(">>>>>>>>>PureParentComp render>>>>>>>>>>>");
    return (
      <div>
        PureParentComp
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default PureParentComp;
