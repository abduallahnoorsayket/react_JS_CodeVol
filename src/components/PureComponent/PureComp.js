import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComp;
