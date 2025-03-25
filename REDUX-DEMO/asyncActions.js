const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").thunk;

const axios = require("axios");

//Action
const SEND_REQUEST = "SEND_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

/* {
  type: BUY_CAKE,
  info: "first raction in redux"
} */

// action creator

function fetchData() {
  return {
    type: SEND_REQUEST,
  };
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
}

function fetchDataFailed(error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: error,
  };
}

// reducer(prevState, action) => newState

const initState = {
  loading: false,
  data: [],
  error: "",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

// Thunk Middleware gives ability to action creator to return function instead of action obj
// dispatch actions

function getUserId() {
  return function (dispatch) {
    dispatch(fetchData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data.map((user) => user.id);
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailed(error.message));
      });
  };
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

/* const unsubscribe =  */ store.subscribe(() => {
  console.log("init", store.getState());
});
store.dispatch(getUserId());
/* unsubscribe(); */
