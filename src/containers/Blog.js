import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts/Posts";

const Blog = () => {
  return (
    <Container>
      <Posts />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1.2rem;
`;

export default Blog;
