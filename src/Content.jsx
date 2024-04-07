/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { PostsShowPage } from "./PostsShowPage";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleUpdatePost = (id, params) => {
    console.log("handleUpdatePost", params);
    axios.patch(`http://localhost:3000/posts/` + id + `.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  const handleDestroyPost = (id) => {
    console.log("handleDestroyPost", id);
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      setPosts(posts.filter((post) => post.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
      </Routes>
      <div className="container">
        <Modal show={isPostsShowVisible} onClose={handleClose}>
          <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
        </Modal>
      </div>
    </main>
  );
}
