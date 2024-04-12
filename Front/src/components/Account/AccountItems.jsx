import React from "react";
import PropTypes from "prop-types";

/*
 * Component representing an individual account item.
 * @param {object} props - The props object containing title, amount, and description of the account item.
 * @returns {JSX.Element} An individual account item.
 */

const AccountItem = ({ title, amount, description }) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
};

AccountItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AccountItem;
