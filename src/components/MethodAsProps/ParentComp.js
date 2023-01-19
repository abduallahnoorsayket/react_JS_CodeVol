import React, { Component } from "react";
import { ChildComp } from "./ChildComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childParam) {
    alert(`Hello ${this.state.parentName} form ${childParam}`);
  }

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}
