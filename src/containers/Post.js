import React, { useEffect } from "react"
import { useParams, Redirect } from "react-router-dom";
import {gql, useQuery} from '@apollo/client';
import Post from "../components/Posts/Post";

const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
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

const PostContainer = (props) => {
  const params = useParams();
  const id = String(params.id)
  const {loading, error, data} = useQuery(GET_POST, { 
    variables: { id }
  });

  useEffect(() => {
    if(error){
      console.error(error.message);
    }

    if(data){
      console.log(data);
    }
  }, [loading, data, error])

  const renderPost = () => {
    if (data && data.post) {
      const parsed_data = {
        post: {
          ...data.post,
          body: JSON.parse(data.post.body)
        }
      }
      return (
        <div>
          <Post post={parsed_data.post} />
        </div>
      );
    } else if(loading) {
      return <div>Loading...</div>;
    } 
    else {
        return <Redirect to="/not-found" />
    }
  };

  return renderPost();
};

export default PostContainer;
