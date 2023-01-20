import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  render() {
    return (
      this.state.isLoggedin && (
        <div>
          <h2>wellcome abdullah</h2>
        </div>
      )
    );
    // ternary operator
    // return this.state.isLoggedin ? (
    //   <div>
    //     <h2>wellcome abdullah</h2>
    //   </div>
    // ) : (
    //   <div>
    //     <h2>wellcome Guest</h2>
    //   </div>
    // );
    // element variable
    // let message;
    // if (this.state.isLoggedin) {
    //   message = (
    //     <div>
    //       <h2>wellcome abdullah</h2>
    //     </div>
    //   );
    // } else {
    //   message = (
    //     <div>
    //       <h2>wellcome Guest</h2>
    //     </div>
    //   );
    // }
    // return <div>{message}</div>;

    // IF/ ELSE
    // if (this.state.isLoggedin) {
    //   return (
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
    // return (
    //   <div>
    //     <h2>wellcome abdullah</h2>
    //     <h2>wellcome Sayket</h2>
    //   </div>
    // );
  }
}
