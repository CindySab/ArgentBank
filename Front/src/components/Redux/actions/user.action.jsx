import axios from "axios";

/*
 * Function to fetch user profile data from the server.
 * @param {string} token - User authentication token.
 * @returns {Function} A function that dispatches actions.
 */

export const userProfil = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            config
        );

        // Checking the structure of the response
        if (response.data && response.data.body) {
            const { firstName, lastName, userName } = response.data.body;

            dispatch({
                type: "USER_PROFIL_SUCCESS",
                payload: { firstName, lastName, userName, token },
            });
        } else if (response.data) {
            // If response.data is defined but response.data.body is not
            // You can directly access response.data here
            const { firstName, lastName, userName } = response.data;

            dispatch({
                type: "USER_PROFIL_SUCCESS",
                payload: { firstName, lastName, userName, token },
            });
        } else {
            dispatch({
                type: "USER_PROFIL_FAIL",
                payload: "Invalid response structure",
            });
        }
    } catch (err) {
        dispatch({
            type: "USER_PROFIL_FAIL",
            payload: err.response ? err.response.data.message : "Unknown error",
        });
    }
};
