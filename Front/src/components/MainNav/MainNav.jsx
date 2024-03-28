import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/actions/logout.action";
import { userProfil } from "../Redux/actions/user.action"; // Importer l'action userProfil
import logo from "../../img/argentBankLogo-min.png";
import PropTypes from "prop-types";

/*
 * Component for the main navigation bar.
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated or not.
 * @param {Function} props.logout - Function to log out the user.
 * @param {Function} props.fetchUserProfile - Function to fetch user profile data.
 * @param {string} props.token - User authentication token.
 * @param {string} props.firstName - User's first name.
 * @returns {JSX.Element} Main navigation bar.
 */

const MainNav = ({
    isAuthenticated,
    logout,
    fetchUserProfile,
    token,
    userName,
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
                        <Link to="/profile" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {userName}
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
    userName: PropTypes.string,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
    token: state.loginReducer.token,
    userName: state.editNameReducer.userName,
});

const mapDispatchToProps = {
    logout: logoutUser,
    fetchUserProfile: userProfil,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
