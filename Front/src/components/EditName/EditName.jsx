import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editUsername } from "../Redux/actions/editName.action";

/*
 * Component for editing user information.
 * @component
 * @param {object} props - The props object.
 * @param {string} props.firstName - The first name of the user.
 * @param {string} props.lastName - The last name of the user.
 * @param {string} props.username - The current username of the user.
 * @param {function} props.editUsername - Function to edit the username.
 * @param {string} props.token - The authentication token of the user.
 * @returns {JSX.Element} A JSX element representing the EditName component.
 */

const EditName = ({
    firstName,
    lastName,
    username,
    editUsername,
    token,
    onCancel,
    setEditing,
}) => {
    const [newUsername, setNewUsername] = useState(username || "");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
        // Réinitialise le message d'erreur dès que l'utilisateur commence à écrire dans la case du nom d'utilisateur
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUsername.trim() !== "") {
            editUsername(newUsername, token);
            setEditing(false);
        } else {
            setErrorMessage("Username cannot be empty");
        }
    };

    const handleCancelClick = () => {
        onCancel();
    };

    return (
        <div className="editUser">
            <h2 className="title">Edit User info</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="inputuser">
                    <label>User name:</label>
                    <input
                        value={newUsername}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="inputuser">
                    <label>First name: </label>
                    <input value={firstName} readOnly />
                </div>
                <div className="inputuser">
                    <label>Last name:</label>
                    <input value={lastName} readOnly />
                </div>
                <div className="btn">
                    <button className="sign-in-button" type="submit">
                        Save
                    </button>
                    <button
                        className="sign-in-button"
                        type="button"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

EditName.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    editUsername: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    setEditing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    username: state.userReducer.username,
    token: state.loginReducer.token,
});

const mapDispatchToProps = {
    editUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditName);
