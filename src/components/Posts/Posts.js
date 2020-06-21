import React, { useEffect } from "react";
import PostListItem from "./PostListItem";
import { connect } from "react-redux";
import styled from 'styled-components';

const Posts = (props) => {
  useEffect(() => {
    console.log(props.posts);
  }, [props.posts]);
  return (
    <PostListWrapper>
      <ul>
        {props.posts &&
          props.posts.map((post) => {
            return <PostListItem key={post.id} post={post} />;
          })}
      </ul>
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

export default connect(mapStateToProps, {})(Posts);
