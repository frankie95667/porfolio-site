import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, getProjects, getWork, getEducation } from "./actions";
import Blog from "./containers/Blog";
import Post from "./containers/Post";
import NotFound from "./containers/NotFound";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import "./App.css";

function App(props) {
  useEffect(() => {
    getData();
  }, []);

  function getData(){
    props.getPosts();
    props.getProjects();
    props.getWork();
    props.getEducation();
  }

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

const mapStateToProps = ({ posts, projects }) => {
  return {
    posts,
    projects,
  };
};

export default connect(mapStateToProps, {
  getPosts,
  getProjects,
  getWork,
  getEducation,
})(App);
