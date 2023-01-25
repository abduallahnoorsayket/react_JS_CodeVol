import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sayket",
    };
    console.log("LifecyleB const: ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate ");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifecyleB render");
    return <div>LifecyleB render</div>;
  }
}
