import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      //   {
      //     count: this.state.count + 1,
      //   },
      //   () => {
      //     console.log("Callback value :", this.state.count);
      //   }
      (prevState) => ({
        count: prevState.count + 1,
      })
    );
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h4>Counter - {this.state.count}</h4>
        <button onClick={() => this.incrementFive()}>Increment </button>
      </div>
    );
  }
}
