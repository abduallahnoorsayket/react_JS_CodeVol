import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello hi",
    };
    // this.changeMessage = this.changeMessage.bind(this);
  }
  //   changeMessage() {
  //     this.setState({
  //       message: "Goodbye ",
  //     });
  //     console.log(this);
  //   }
  changeMessage = () => {
    this.setState({
      message: "Goodbye ",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage.bind(this)}>Event Click</button> */}
        {/* <button onClick={() => this.changeMessage()}>Event Click</button> */}
        <button onClick={this.changeMessage}>Event Click</button>
      </div>
    );
  }
}
