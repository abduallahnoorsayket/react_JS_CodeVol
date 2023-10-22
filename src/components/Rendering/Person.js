import React from "react";

const Person = ({ person }) => {
  const { name, age, skill } = person;
  return (
    <div>
      <h2>
        I am {name} . I am {age} old. I love {skill}.
      </h2>
    </div>
  );
};

export default Person;
