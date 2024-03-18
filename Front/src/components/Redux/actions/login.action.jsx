import axios from "axios";

/*
 * Function to authenticate user login.
 * @param {Object} userData - User login credentials.
 * @param {string} userData.email - User's email address.
 * @param {string} userData.password - User's password.
 * @returns {Function} A function that dispatches actions.
 */

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
        if (err.response && err.response.status === 400) {
            throw new Error("Invalid email or password");
        } else {
            dispatch({
                type: "LOGIN_FAIL",
                payload: err.response
                    ? err.response.data.message
                    : "Unknown error",
            });
        }
    }
};
