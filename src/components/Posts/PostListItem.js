import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import styled from "styled-components";

const PostListItem = ({post}) => {
    useEffect(() => {
        console.log(post.featured_image);
    })
    return (
        <List>
            <Img src={`http://localhost:1337${post.featured_image.url}`} />
            <p>{moment(post.created_at).format('MMMM Do YYYY')}</p>
            <Link to={`/blog/${post.id}`}><Title>{post.Title}</Title></Link>
            <p>{post.Snippet}</p>
            <p>
                <ReadMore to={`/blog/${post.id}`}>Read more</ReadMore>
            </p>
        </List>
    )
}

const List = styled.li`
    margin: 50px 0;
`;

const Title = styled.h2`
    font-size: 2.4rem;
`;

const ReadMore = styled(Link)`
    border: 1px solid #e2e2e2;
    border-radius: 18px;
    line-height: 36px;
    font-size: 13px;
    font-weight: 500;
    padding: 0 20px;
    height: 36px;
    display:inline-block;
    text-decoration: none;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1.2rem;
`;

export default PostListItem;