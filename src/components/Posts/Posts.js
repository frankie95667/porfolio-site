import React, { useEffect } from "react";
import PostListItem from "./PostListItem";
import { connect } from "react-redux";
import styled from 'styled-components';
import {gql, useQuery} from '@apollo/client';

const GET_POSTS = gql`
  query getPosts($published: Boolean!) {
    posts(where: {published: $published}) {
      id
      Title
      Snippet
      featured_image {
        id
        url
        formats
      }
      body
    }
  }
`;

const Posts = (props) => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { published: true}
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`
  return (
    <PostListWrapper>
      <ul>
        {props.posts &&
          data.posts.map((post) => {
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
