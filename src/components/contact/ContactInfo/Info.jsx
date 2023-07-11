import React from "react";
import "./info.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Info = () => {
    return (
        <div className="contact-info-box">
            <h4>I would be happy to answer any questions you may have.</h4>
            <div className="contact-options">
                <FaPhoneAlt size="32px" />
                <span className="text">+91 7011417501</span>
            </div>
            <div className="contact-options">
                <MdEmail size="32px" />
                <span className="text">rt@2171998@gmail.com</span>
            </div>
            <div className="contact-options">
                <BsLinkedin size="32px" />
                <a href="https://www.linkedin.com/in/rahul-tyagi-a6560615b/">
                    Visit Linkedin Profile
                </a>
            </div>
        </div>
    );
};

export default Info;
