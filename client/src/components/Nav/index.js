import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


function Navbar() {
    var user = firebase.auth().currentUser;
    console.log(user);

    
    
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Chuniverse</Link>
                {!user ? (
                <ul className="navbar-nav">
                    <li className="nav-item">
                     
                        <Link
                            to="/login"
                            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        > Log In</Link>
                    </li>
                </ul>
                ) : ( 
                    <ul className="navbar-nav">
                    <li className="nav-item">
                     
                        <Link
                            to="/blog"
                            className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
                        > Blog</Link>
                    </li>
                    <li className="nav-item">
                     
                        <Link
                            to="/cms"
                            className={window.location.pathname === "/cms" ? "nav-link active" : "nav-link"}
                        > CMS</Link>
                    </li>
                    <li className="nav-item">
                     
                        <Link
                            to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        > Log Out</Link>
                    </li>
                </ul>
                )}
            </div>
        </nav>

    );
}

export default Navbar;