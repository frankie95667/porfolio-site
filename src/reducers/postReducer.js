export const ADD_POSTS = "ADD_POSTS";

export const postReducer = (state = [], {type, payload}) => {
    switch(type){
        case ADD_POSTS:
            return [
                ...payload
            ]
        default:
            return state;
    }
}