import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../Redux/actions/login.action";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

/*
 * Component for the sign-in page content.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.loginUser - Function to log in the user.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated or not.
 * @returns {JSX.Element} Sign-in page content.
 */

const SignInContent = ({ loginUser, isAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            Navigate("/user");
        }
    }, [isAuthenticated, Navigate]);

    /*
     * Function to submit the sign-in form.
     * @param {Object} e - The form submission event.
     */

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password,
        };
        await loginUser(userData);
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    );
};

// Specifies the types of properties expected by the component
SignInContent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

// Connects the component to the Redux store and maps required properties from the Redux state
const mapStateToProps = (state) => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
});

// Connects Redux actions to the component
const mapDispatchToProps = {
    loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContent);
