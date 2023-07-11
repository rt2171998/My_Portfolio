import React from "react";
import "./intro.scss";
import cloud from "../../images/cloud.png";
import cloudsoft from "../../images/cloud-soft.png";
import Nav from "./Nav/Nav";
import IntroContent from "./intro-content/IntroContent";
const Intro = () => {
    return (
        <div className="intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <img
                src={cloud}
                alt="cloud"
                className="cloud"
            />
            <img
                src={cloudsoft}
                alt="cloud"
                className="cloud-soft"
            />
            <div className="content">
                <Nav />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
