import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reduce = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };
    case "FETCH_ERROR":
      return { loading: false, error: "Something went wrong", post: {} };
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reduce, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/13")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
