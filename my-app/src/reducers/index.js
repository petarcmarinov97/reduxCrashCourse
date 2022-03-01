import { combineReducers } from "@reduxjs/toolkit";
import postReducer from './postReducer.js';

export default combineReducers({
    posts: postReducer
});