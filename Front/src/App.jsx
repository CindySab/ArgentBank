import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav/MainNav";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <MainNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
