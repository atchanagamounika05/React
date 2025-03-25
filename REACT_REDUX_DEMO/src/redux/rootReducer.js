import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";
import icecreamReducer from "./iceCream/icecreamReducers";
import puffReducer from "./puff/puffReducers";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  icecreams: icecreamReducer,
  puffs: puffReducer,
  users: userReducer,
});

export default rootReducer;
