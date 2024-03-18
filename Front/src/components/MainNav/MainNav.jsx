import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/actions/logout.action";
import { userProfil } from "../Redux/actions/user.action"; // Importer l'action userProfil
import logo from "../../img/argentBankLogo.png";
import PropTypes from "prop-types";

const MainNav = ({
    isAuthenticated,
    logout,
    fetchUserProfile,
    token,
    firstName,
}) => {
    const handleSignOut = () => {
        logout();
    };

    const handleFetchProfile = (token) => {
        fetchUserProfile(token);
    };
    useEffect(() => {
        if (isAuthenticated && token) {
            handleFetchProfile(token);
        }
    }, [isAuthenticated, token, handleFetchProfile]);

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isAuthenticated ? (
                    <div>
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </Link>
                        <Link
                            to="/"
                            onClick={handleSignOut}
                            className="main-nav-item"
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <Link to="/signIn" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

MainNav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    fetchUserProfile: PropTypes.func.isRequired,
    token: PropTypes.string,
    firstName: PropTypes.string,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
    token: state.loginReducer.token,
    firstName: state.userReducer.firstName,
});

const mapDispatchToProps = {
    logout: logoutUser,
    fetchUserProfile: userProfil,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
