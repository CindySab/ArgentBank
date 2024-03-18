import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/*
 * Component for guarding routes based on user authentication status.
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated or not.
 * @param {JSX.Element} props.children - The child elements to be rendered inside the guard.
 * @returns {JSX.Element} The guarded content.
 */

const AuthGuard = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/signIn" />;
    }

    return children;
};

AuthGuard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
});

export default connect(mapStateToProps)(AuthGuard);
