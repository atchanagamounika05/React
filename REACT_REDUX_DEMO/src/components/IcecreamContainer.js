import React from "react";
import { buyIcecream } from "../redux";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>number of iceCreams - {props.numOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy Ice Creams</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  console.log("state", state);
  return {
    numOfIcecreams: state.icecreams.numOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(IcecreamContainer);
