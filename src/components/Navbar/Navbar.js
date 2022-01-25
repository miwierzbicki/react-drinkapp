import React from "react";
import styles from "./Navbar.module.scss";
import {Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="navbar-brand">Znajdź sobie drinka</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
