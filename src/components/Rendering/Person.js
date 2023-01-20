import React from "react";

const Person = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      <h2>
        I am {name} . I am {age} old.{" "}
      </h2>
    </div>
  );
};

export default Person;
