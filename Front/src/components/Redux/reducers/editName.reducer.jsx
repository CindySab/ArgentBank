/*
 * Initial state for the user reducer.
 * @type {Object}
 * @property {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} username - The username of the user.
 * @property {null|string} error - Any error that occurred during user actions.
 */

const initialState = {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    userName: "",
    error: null,
};

/*
 * Reducer function for managing user-related actions.
 * @param {Object} state - The current state of the user.
 * @param {Object} action - The action dispatched to the reducer.
 * @returns {Object} The new state after processing the action.
 */

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_PROFIL_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                error: null,
            };
        case "USER_PROFIL_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload,
            };
        case "EDIT_USERNAME_SUCCESS":
            return {
                ...state,
                userName: action.payload.userName,
            };
        case "EDIT_USERNAME_FAIL":
            return {
                ...state,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                firstName: "",
                lastName: "",
                userName: "",
            };
        default:
            return state;
    }
};

export default userReducer;
