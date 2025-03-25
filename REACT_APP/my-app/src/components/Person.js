import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} my place is {person.place}{" "}
      </h2>
    </div>
  );
}

export default Person;
