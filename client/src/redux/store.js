import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth/AuthReducer';
import PostReducer from './reducers/post/PostReducer';

const rootReducer = combineReducers({
    AuthReducer,
    PostReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));