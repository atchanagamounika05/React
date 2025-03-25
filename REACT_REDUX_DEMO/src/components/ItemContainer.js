import React from "react";
import { buyCake, buyIcecream } from "../redux";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

const mapStatetoProps = (state, ownProps) => {
  const ItemState = ownProps.cake
    ? state.cakes.numOfCakes
    : state.icecreams.numOfIcecreams;
  return {
    item: ItemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchState = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchState,
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ItemContainer);
