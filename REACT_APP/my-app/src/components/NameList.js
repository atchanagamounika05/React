import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Joe",
      place: "JP",
      score: 89,
    },
    {
      id: 2,
      name: "Gil",
      place: "UP",
      score: 95,
    },
    {
      id: 3,
      name: "Wil",
      place: "AP",
      score: 85,
    },
  ];
  /* const names = ["Jeo", "Himi", "mihon"];
  const nameList = names.map((name) => <h2>{name}</h2>); */
  const personList = persons.map((person) => (
    <Person key={person.name} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
