import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome/Welcome";
import Logo from "./Logo/logo.png";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import CMS from "./pages/CMS";
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <div>
      <div className="container-div">
        <img src= {Logo} width="100%" />
        </div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route eaxct path="/blog" component={Blog} />
          <Route eaxct path="/cms" component={CMS} />
          <Route exact path="/post/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
