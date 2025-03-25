import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  // fetching all the posts
  /* const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  ); */

  //fetching a songle post based on id as input
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [buttonId, setButtonId] = useState(1);
  const handleClick = () => {
    setButtonId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [buttonId]);
  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
      {post.title}
    </div>
  );
}

export default DataFetching;
