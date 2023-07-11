import React from "react";
import "./contact.scss";
import Conatiner from "../../shared/container/Container";
import Info from "./ContactInfo/Info";
import Form from "./email/Form";
const Contact = () => {
    return (
        <Conatiner
            title="Contact Me"
            background="light"
        >
            <div className="contact-wrapper">
                <Info />
                <Form />
            </div>
        </Conatiner>
    );
};

export default Contact;
