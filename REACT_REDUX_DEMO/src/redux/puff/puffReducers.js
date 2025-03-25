import { BUY_PUFF } from "./puffTypes";

const initState = {
  numOfPuffs: 30,
};

const puffReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_PUFF:
      return {
        ...state,
        numOfPuffs: state.numOfPuffs - 1,
      };
    default:
      return state;
  }
};

export default puffReducer;
