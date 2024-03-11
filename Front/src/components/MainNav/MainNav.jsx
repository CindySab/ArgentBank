import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <Link to="/">
                <a className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
            </Link>
            <div>
                <Link to="/signIn" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default MainNav;