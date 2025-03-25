import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from "./userTypes";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case USER_FETCH_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
