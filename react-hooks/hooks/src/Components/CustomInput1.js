import React, { useState } from "react";
import useInput from "../Hooks/useInput";

function CustomInput1() {
  /* 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); */

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}!`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            /* value={firstName}
            onChange={(e) => setFirstName(e.target.value)} */
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            /* value={lastName}
            onChange={(e) => setLastName(e.target.value)} */
            {...bindLastName}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CustomInput1;
