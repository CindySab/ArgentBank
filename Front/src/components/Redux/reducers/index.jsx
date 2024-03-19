import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login.reducer";
import userReducer from "./user.reducer";
import editNameReducer from "./editName.reducer";

export default combineReducers({
    loginReducer,
    userReducer,
    editNameReducer,
});
