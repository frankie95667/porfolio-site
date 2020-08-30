import React from "react";
import PostListItem from "./PostListItem";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts($published: Boolean!) {
    posts(where: { published: $published }) {
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

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { published: true },
  });

  if (loading) return "Loading...";
  else if (error) return `Error! ${error.message}`;
  else {
    return (
      <PostListWrapper>
        <ul>
          {data.posts.map((post) => {
              return <PostListItem key={post.id} post={post} />;
            })}
        </ul>
      </PostListWrapper>
    );
  }
};

const PostListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Posts;
