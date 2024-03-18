const initialState = {
    token: null,
    isAuthenticated: false,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default loginReducer;
