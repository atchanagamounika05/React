import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleChangeComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleOptions = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    alert(
      `${this.state.username}, ${this.state.comments}, ${this.state.topic}`
    );
    e.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.handleChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleChangeComments} />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleOptions}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
