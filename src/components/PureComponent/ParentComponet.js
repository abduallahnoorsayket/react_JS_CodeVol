import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComponet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "abdullah",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abdullah",
      });
    }, 2000);
  }
  render() {
    console.log("***************parent comp render******************");
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponet;
