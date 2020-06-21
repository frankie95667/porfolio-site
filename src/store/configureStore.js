import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {postReducer, projectReducer, resumeReducer} from "../reducers";

const logger = createLogger();

const rootReducer = combineReducers({
    posts: postReducer,
    projects: projectReducer,
    resume: resumeReducer
})

const configureStore = () => {
    let store;
    let middleware;
    
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        middleware = [thunk, logger];
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const enhancer = composeEnhancers(applyMiddleware(...middleware));
        store = createStore(
            rootReducer,
            {
                /*preloaded state */
            },
            enhancer
        );
    } else {
        store = createStore(
            rootReducer,
            {
                /*preloaded state */
            },
            applyMiddleware(thunk, logger)
        );
    }

  return store;
};

export default configureStore;
