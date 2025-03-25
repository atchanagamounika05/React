import React, { useState } from "react";

function UseStateObj() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>FirstName : {name.firstName} </h1>
      <h1>LastName: {name.lastName}</h1>
    </div>
  );
}

export default UseStateObj;
