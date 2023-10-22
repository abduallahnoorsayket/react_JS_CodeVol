import React from "react";

export const Hello = () => {
  return (
    <div className="dummyclass">
      <h1>Hello comp Sayket</h1>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "dummyclass" },
  //   React.createElement("h1", null, "Hello comp Sayket")
  // );
};
