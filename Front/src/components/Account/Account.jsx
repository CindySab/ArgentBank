import React from "react";
import accountsData from "../../data/accountsData.json";

const Account = () => {
    return (
        <div className="accountContainer">
            {accountsData.map((account, index) => (
                <section key={index} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">{account.amount}</p>
                        <p className="account-amount-description">
                            {account.description}
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Account;
