import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ firstName, lastName }) => {
    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstName} {lastName}!
            </h1>
            <button className="edit-button">Edit Name</button>
        </div>
    );
};

Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

const mapStateToProps = (state) => ({
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
});

export default connect(mapStateToProps)(Header);
