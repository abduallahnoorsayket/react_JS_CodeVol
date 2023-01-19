import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  render() {
    // let message;
    // if (this.state.isLoggedin) {
    //   message = (
    //     <div>
    //       <h2>wellcome abdullah</h2>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h2>wellcome Guest</h2>
    //     </div>
    //   );
    // }

    if (this.state.isLoggedin) {
      return (
        <div>
          <h2>wellcome abdullah</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>wellcome Guest</h2>
        </div>
      );
    }
    // return (
    //   <div>
    //     <h2>wellcome abdullah</h2>
    //     <h2>wellcome Sayket</h2>
    //   </div>
    // );
  }
}
