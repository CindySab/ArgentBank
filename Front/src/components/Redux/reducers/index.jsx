import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    loginReducer,
    userReducer,
});
