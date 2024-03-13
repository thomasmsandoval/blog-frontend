import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let name = "Thomas Sandoval";
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Load Posts</button> */}
      <PostsIndex name={name} posts={posts} />
    </main>
  );
}
