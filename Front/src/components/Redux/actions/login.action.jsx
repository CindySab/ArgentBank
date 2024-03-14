import axios from "axios";

export const loginUser = (userData) => async (dispatch) => {
    try {
        const res = await axios.post(
            "http://localhost:3001/api/v1/user/login",
            userData
        );
        const token = res.data.body.token;
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: token,
        });
    } catch (err) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: err.response.data.message,
        });
    }
};
