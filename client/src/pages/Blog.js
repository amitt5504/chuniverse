import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
//import "./style.css"
import PostList from "../components/PostList";


function Blog() {

  return (
    <div>
      <PostList />
    </div>
  );
}

export default Blog;