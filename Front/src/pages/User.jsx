import React from "react";
import Header from "../components/Header/Header";
import Account from "../components/Account/Account";

const User = () => {
    return (
        <main className="main bg-dark">
            <Header></Header>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <Account></Account>
            </section>
        </main>
    );
};

export default User;
