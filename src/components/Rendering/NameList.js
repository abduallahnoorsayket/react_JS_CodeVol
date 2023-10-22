import React from "react";
import Person from "./Person";

export const NameList = () => {
  let names = ["Bruce", "Diana", "Morgan", "ALex", "Bob", "ALex"];
  let persons = [
    {
      id: 1,
      name: "Bruce",
      age: 28,
      skill: "Vue",
    },
    {
      id: 2,
      name: "Diana",
      age: 30,
      skill: "React",
    },
    {
      id: 3,
      name: "Morgan",
      age: 35,
      skill: "Angular",
    },
  ];
  let personlist = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personlist}</div>;

  // let namelist = names.map((name, index) => (
  //   <h2 key={index}>
  //     {index} : {name}
  //   </h2>
  // ));
  // return <div>{namelist}</div>;
};
