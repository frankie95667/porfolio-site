import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import Post from "../components/Posts/Post";

const PostContainer = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (props.posts.length) {
      setPost(props.posts.find((post) => post.id === Number(id)));
    }
  }, [props.posts, id]);

  const renderPost = () => {
    if (post) {
      return (
        <div>
          <Post post={post} />
        </div>
      );
    } else if (post === null) {
      return <div></div>;
    } else {
        return <Redirect to="/not-found" />
    }
  };

  return renderPost();
};

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

export default connect(mapStateToProps, {})(PostContainer);
