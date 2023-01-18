import React, { Component } from "react";

export default class ClassClick extends Component {
  handleClick() {
    console.log("inside class click");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
