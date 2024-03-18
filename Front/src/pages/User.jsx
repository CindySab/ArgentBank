import React from "react";
import Header from "../components/Header/Header";
import Account from "../components/Account/Account";

const User = () => {
    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            <Account></Account>
        </main>
    );
};

export default User;
