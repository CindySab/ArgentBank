import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../Redux/actions/login.action";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SignInContent = ({ loginUser, error }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password,
        };
        await loginUser(userData);

        if (!error) {
            Navigate("/user");
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            {error && <p className="error-message">{error}</p>}
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
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    );
};

SignInContent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    error: PropTypes.string, // Vous pouvez ajuster le type en fonction de votre implémentation
};

const mapStateToProps = (state) => ({
    error: state.loginReducer.error,
});

const mapDispatchToProps = {
    loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContent);
