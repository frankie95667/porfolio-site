import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import {ADD_PROJECTS} from "../reducers/index";
const url = process.env.BACKEND_URL || "http://localhost:1337";

export const getProjects = () => dispatch => {
    axios.get(url + "/projects")
    .then(res => {
        dispatch({type: ADD_PROJECTS, payload: res.data.map(project => {
            return {
                ...project,
                description: JSON.parse(project.description)
            }
        })})
    })
    .catch(err => console.error(err));
}