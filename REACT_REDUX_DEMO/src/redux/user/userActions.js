import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from "./userTypes";

import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        console.log("error", err);
        dispatch(fetchUserFailure(err.message));
      });
  };
};
