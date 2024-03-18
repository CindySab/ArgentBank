const initialState = {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_PROFIL_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                error: null,
            };
        case "USER_PROFIL_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
