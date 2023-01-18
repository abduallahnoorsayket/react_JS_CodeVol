import React from "react";

export const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello comp Sayket</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Hello comp Sayket",
      React.createElement("p", null, "Inside body tag")
    )
  );
};
