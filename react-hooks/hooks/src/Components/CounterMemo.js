import React, { useMemo, useState } from "react";

function CounterMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleCounter1 = () => {
    setCounterOne(counterOne + 1);
  };

  const handleCounter2 = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i > 20000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  /* const isEven = () => {
    let i = 0;
    while (i > 20000000000) i++;
    return counterOne % 2 === 0;
  }; */
  return (
    <div>
      <div>
        <button onClick={handleCounter1}>Counter 1 - {counterOne}</button>
        {/* <span>{isEven() ? "EVEN" : "ODD"}</span> */}
        <span>{isEven ? "EVEN" : "ODD"}</span>
      </div>
      <div>
        <button onClick={handleCounter2}>Counter 2 - {counterTwo}</button>
      </div>
    </div>
  );
}

export default CounterMemo;
