import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>Number of items - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy Item </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { numOfCakes: state.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NewCakeContainer);
