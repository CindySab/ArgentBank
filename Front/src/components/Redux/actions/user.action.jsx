import axios from "axios";

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
        console.log("Response:", response);

        // Vérification de la structure de la réponse
        if (response.data && response.data.body) {
            const { firstName, lastName } = response.data.body;

            dispatch({
                type: "USER_PROFIL_SUCCESS",
                payload: { firstName, lastName, token },
            });
        } else if (response.data) {
            // Si response.data est défini mais response.data.body ne l'est pas
            // Vous pouvez accéder directement à response.data ici
            const { firstName, lastName } = response.data;

            dispatch({
                type: "USER_PROFIL_SUCCESS",
                payload: { firstName, lastName, token },
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
