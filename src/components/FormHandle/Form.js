import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      ` ${this.state.username}  and  ${this.state.comments} and ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <br></br>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <br></br>
        <div>
          <label>Text area</label>
          <textarea
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={this.handleTopicChange}>
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
