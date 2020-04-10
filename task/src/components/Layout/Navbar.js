import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import classes from "./Navbar.module.css";

const navbar = () => {
    return (
        
            <nav className="nav-wrapper grey darken-3 ">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        SG
                    </Link>
                    <SignedOutLinks />
                </div>
            </nav>
        
    );
};

export default navbar;
