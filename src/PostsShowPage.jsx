/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);
  return (
    <div id="posts-show">
      <h1>{post.title}</h1>
      <p>Body: {post.body}</p>
      <p>image: {post.image}</p>
    </div>
  );
}
