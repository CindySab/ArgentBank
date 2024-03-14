const initialState = {
    token: null, // Initialiser le token à null
    isAuthenticated: false, // Initialiser l'état d'authentification à false
    error: null, // Initialiser l'erreur à null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                token: action.payload, // Stocker le token dans le store Redux
                isAuthenticated: true, // Mettre l'état d'authentification à true
                error: null, // Réinitialiser l'erreur à null
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                token: null, // Réinitialiser le token à null en cas d'échec de connexion
                isAuthenticated: false, // Mettre l'état d'authentification à false en cas d'échec de connexion
                error: action.payload, // Stocker l'erreur dans le store Redux
            };
        case "LOGOUT":
            return {
                ...state,
                token: null, // Effacer le token en cas de déconnexion
                isAuthenticated: false, // Mettre l'état d'authentification à false en cas de déconnexion
            };
        default:
            return state;
    }
};

export default loginReducer;
