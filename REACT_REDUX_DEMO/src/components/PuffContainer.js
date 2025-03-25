import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPuff } from "../redux";

function PuffContainer() {
  const puffsCount = useSelector((state) => state.puffs.numOfPuffs);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of puffs - {puffsCount} </h2>
      <button onClick={() => dispatch(buyPuff())}>Buy Puffs</button>
    </div>
  );
}

export default PuffContainer;
