import React from "react";
import logo from "../../../images/logo.png";
import "./nav.scss";
import CalltoAction from "../../../shared/Cta/CalltoAction";
const Nav = () => {
    return (
        <div className="top-nav">
            <div className="logo">
                <img
                    src={logo}
                    alt="Rahul Tygai"
                />
            </div>
            <div className=" nav-links">
                <span className="nav-item">Skills</span>
                <span className="nav-item">Portfolio</span>
                <span className="nav-item">Blogs & Articles</span>
                <CalltoAction text="Contact Me" />
            </div>
        </div>
    );
};

export default Nav;
