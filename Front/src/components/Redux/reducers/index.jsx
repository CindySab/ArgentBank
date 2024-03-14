import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./login.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    authReducer,
    userReducer,
});
