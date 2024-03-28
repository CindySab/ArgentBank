/*
 * Initial state of the user reducer.
 * @type {Object}
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated or not.
 * @property {string} firstName - User's first name.
 * @property {string} lastName - User's last name.
 * @property {null|string} error - Error message in case of failure.
 */

const initialState = {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    userName: "",
    error: null,
};

/*
 * Reducer to manage the state of the user.
 * @param {Object} state - The current state.
 * @param {Object} action - The action to perform.
 * @returns {Object} The new state.
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
