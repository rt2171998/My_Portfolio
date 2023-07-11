import React from "react";
import "./introcontent.scss";
import CalltoAction from "../../../shared/Cta/CalltoAction";
import hand from "../../../images/hand.png";
//import pro2 from "../../../images/pro2.png";
import rt from "../../../images/rt.jpg";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <div className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="hand icon "
                                />
                            </span>
                            <span className="text">,I Am</span>
                        </span>
                        <span className="big-text">Rahul Tyagi </span>
                    </div>
                    <p>
                        I'm a front end developer with five years of experience
                        in web development. I've worked on a variety of projects
                        for clients in the retail, travel, and healthcare
                        industries. I'm passionate about creating great user
                        experiences and have a strong understanding of usability
                        and accessibility standards.
                    </p>
                    <CalltoAction text="contact me" />
                </div>
                <div className="right-col">
                    <img
                        className="dev-img"
                        src={rt}
                        alt=""
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
