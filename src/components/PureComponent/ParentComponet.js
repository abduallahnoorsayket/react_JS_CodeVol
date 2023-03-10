import React, { Component, PureComponent } from "react";
import MemoComp from "../MemoComp/MemoComp";
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
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponet;
