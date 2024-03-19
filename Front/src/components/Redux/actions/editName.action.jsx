import axios from "axios";

/*
 * Function to update the username on the server.
 * @param {string} newUsername - The new username.
 * @param {string} token - The user's authentication token.
 * @returns {Function} A function that dispatches Redux actions.
 */

export const editUsername = (newUsername, token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const body = JSON.stringify({ userName: newUsername });

        const response = await axios.put(
            "http://localhost:3001/api/v1/user/profile",
            body,
            config
        );

        if (response.data && response.data.body) {
            const updatedUsername = response.data.body.userName;

            dispatch({
                type: "EDIT_USERNAME_SUCCESS",
                payload: updatedUsername,
            });
        } else {
            dispatch({
                type: "EDIT_USERNAME_FAIL",
                payload: "Invalid response structure",
            });
        }
    } catch (err) {
        console.error(
            "Erreur lors de la mise à jour du nom d'utilisateur :",
            err
        );

        dispatch({
            type: "EDIT_USERNAME_FAIL",
            payload: err.response ? err.response.data.message : "Unknown error",
        });
    }
};
