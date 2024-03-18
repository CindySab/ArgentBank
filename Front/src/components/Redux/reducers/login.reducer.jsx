/*
 * Initial state of the login reducer.
 * @type {Object}
 * @property {string|null} token - The authentication token.
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated or not.
 * @property {string|null} error - Error message in case of login failure.
 */

const initialState = {
    token: null,
    isAuthenticated: false,
    error: null,
};

/*
 * Reducer to manage the state of user login.
 * @param {Object} state - The current state.
 * @param {Object} action - The action to perform.
 * @returns {Object} The new state.
 */

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
