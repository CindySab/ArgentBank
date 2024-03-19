import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/Profile";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav/MainNav";
import AuthGuard from "./components/AuthGuard.jsx/AuthGuard";

/*
 * Main component of the application, defining the routing and layout structure.
 * @returns {JSX.Element} The root element of the application.
 */

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <MainNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route
                        path="/profile"
                        element={
                            <AuthGuard>
                                <User />
                            </AuthGuard>
                        }
                    />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
