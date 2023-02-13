import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef} /> */}
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Click </button>
      </div>
    );
  }
}
