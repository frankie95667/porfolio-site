export const ADD_PROJECTS = "ADD_PROJECTS";

export const projectReducer = (state = [], {type, payload}) => {
    switch(type){
        case ADD_PROJECTS:
            return [
                ...state,
                ...payload
            ]
        default:
            return state;
    }
}