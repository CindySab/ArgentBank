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
    const [loginError, setLoginError] = useState("");

    const Navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            Navigate("/profile");
        }
    }, [isAuthenticated, Navigate]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setLoginError("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setLoginError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");

        if (!email.trim() || !password.trim()) {
            setLoginError("Invalid email or password");
            return;
        }

        const userData = { email, password };

        try {
            await loginUser(userData);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setLoginError("Invalid email or password");
            } else {
                setLoginError("Invalid email or password");
            }
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <span className="error-message">{loginError}</span>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
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
