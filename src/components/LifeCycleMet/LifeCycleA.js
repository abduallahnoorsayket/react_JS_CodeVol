import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sayket",
    };
    console.log("LifecyleA const: ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyle A componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate ");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "CodeVolution !",
    });
  };
  render() {
    console.log("LifecyleA render");
    return (
      <div>
        LifecyleA render
        <LifeCycleB />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
