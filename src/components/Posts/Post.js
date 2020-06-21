import React from "react";
import moment from "moment";
import styled from "styled-components";
import BlockType from "../BlockType";

const Post = (props) => {
  
  return (
    <PostWrapper>
      <Title>{props.post.Title}</Title>
      <Date>
        <time datetime={props.post.created_at}>
          {moment(props.post.created_at).format("MMMM do YYYY")}
        </time>
      </Date>
      <ContentWrapper>
        {props.post.body.blocks.map((block, i) => {
          return (
            <BlockWrapper key={i}>
              <BlockType type={block.type} data={block.data} />
            </BlockWrapper>
          );
        })}
      </ContentWrapper>
    </PostWrapper>
  );
};

const PostWrapper = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 3.25rem;
`;

const BlockWrapper = styled.div`
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Date = styled.div`
  text-align: center;
  width: 100%;
`;

export default Post;
