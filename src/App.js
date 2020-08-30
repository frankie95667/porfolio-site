import React from "react";
import Blog from "./containers/Blog";
import Post from "./containers/Post";
import NotFound from "./containers/NotFound";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import "./App.css";

function App(props) {

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route path="/blog/:id">
        <Post />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
    </div>
  );
}

export default App;
