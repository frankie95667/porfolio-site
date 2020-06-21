import {ADD_EDUCATION, ADD_WORK} from "../reducers";

import axios from "axios";
const url = process.env.BACKEND_URL || "http://localhost:1337";

export const getWork = () => dispatch => {
    axios.get(url + "/work-experiences?_sort=end_date:DESC,start_date:DESC")
    .then(works => {
        dispatch({type: ADD_WORK, payload: works.data.map(work => {
            return {
                ...work,
                description: JSON.parse(work.description)
            }
        })})
    })
    .catch(err => console.error(err));
}

export const getEducation = () => dispatch => {
    axios.get(url + "/educations?_sort=end_date:DESC,start_date:DESC")
    .then(educations => {
        dispatch({type: ADD_EDUCATION, payload: educations.data.map(education => {
            return {
                ...education,
                description: JSON.parse(education.description)
            }
        })})
    })
    .catch(err => console.error(err));
}