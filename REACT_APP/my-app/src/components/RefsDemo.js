import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.seCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    /* console.log(this.inputRef);
    this.inputRef.current.focus(); */
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <label>Name</label>
        <input ref={this.inputRef} />
        <input ref={this.seCbRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;
