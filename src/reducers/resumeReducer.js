export const ADD_EDUCATION = "ADD_EDUCATION";
export const ADD_WORK = "ADD_WORK";

export const resumeReducer = (state = {education: [], work: []}, {type, payload}) => {
    switch(type){
        case ADD_EDUCATION:
            return {
                ...state,
                education: payload
            }
        case ADD_WORK:
            return {
                ...state,
                work: payload
            }
        default:
            return state;
    }
}