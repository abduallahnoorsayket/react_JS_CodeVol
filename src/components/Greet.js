import React from "react";

// export default function Greet() {
//   return <div>Greet</div>;
// }

export const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      {/* <h1>
        Hello {props.name} Gretting Component a.k.a {props.heroName}
      </h1> */}
      <h1>
        Hello {name} Gretting Component a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};
