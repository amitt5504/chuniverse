import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import Post from "../components/Post";


function CMS() {

  let styles = {
    textAlign: 'center'
  };

  return (
    <div>
        <Post />
    </div>
  );
}

export default CMS;