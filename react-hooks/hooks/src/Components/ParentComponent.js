import React, { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleIncrement={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleIncrement={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
