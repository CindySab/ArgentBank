import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditName from "../EditName/EditName";

/*
 * Header component to display user information and allow editing.
 * @component
 * @param {object} props - The props object.
 * @param {string} props.firstName - The first name of the user.
 * @param {string} props.lastName - The last name of the user.
 * @returns {JSX.Element} A JSX element representing the Header component.
 */

const Header = ({ firstName, lastName }) => {
    const [editing, setEditing] = useState(false);
    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
    };

    return (
        <div className="header">
            {editing ? (
                <EditName onCancel={handleCancelEdit} setEditing={setEditing} />
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {firstName} {lastName}!
                    </h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </>
            )}
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
