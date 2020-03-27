import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css"
import firebase from "firebase";


function Welcome() {

  let styles = {
    textAlign: 'center'
  };

  firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

  return (
    <div>
      <br />
      <br />
      <div style={styles}>
        <h1 >Weclome to the Chuniverse</h1>
        <Link to="/blog" className="badge badge-pill" id="test">Click Here To Enter!!</Link>
      </div>
    </div>
  );
}

export default Welcome;