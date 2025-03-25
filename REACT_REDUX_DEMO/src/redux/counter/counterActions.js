import { INCREMENT } from "./counterTypes";
import { DECREMENT } from "./counterTypes";
import { RESET } from "./counterTypes";

export const incrementFunc = () => {
  return { type: INCREMENT };
};

export const decrementFunc = () => {
  return { type: DECREMENT };
};

export const resetFunc = () => {
  return { type: RESET };
};
