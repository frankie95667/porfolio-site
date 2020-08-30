import axios from "axios";
import dotenv from "dotenv";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {ADD_POSTS} from "../reducers/index";
dotenv.config();
const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

export const getPosts = () => dispatch => {
    axios.get(url + "/posts?published=true")
    .then(res => {
        console.log(res.data);
        dispatch({type: ADD_POSTS, payload: res.data.map(post => {
            return {
                ...post,
                body: JSON.parse(post.body)
            }
        })})
    })
    .catch(err => console.error(err));
}