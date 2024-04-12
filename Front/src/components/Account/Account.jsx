import React from "react";
import accountsData from "../../data/accountsData.json";
import AccountItems from "./AccountItems";

/*
 * Component representing the list of accounts.
 * @returns {JSX.Element} List of accounts.
 */

const Account = () => {
    return (
        <div className="accountContainer">
            {accountsData.map((account, index) => (
                <AccountItems
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </div>
    );
};

export default Account;
