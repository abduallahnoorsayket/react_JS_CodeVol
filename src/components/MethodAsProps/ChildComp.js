import React from "react";

export const ChildComp = (prop) => {
  return (
    <div>
      <button onClick={() => prop.greetHandler("Chilld component")}> Greet parent</button>
    </div>
  );
};
