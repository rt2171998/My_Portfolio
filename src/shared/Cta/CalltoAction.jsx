import React from "react";
import "./cta.scss";
import Arrow from "../arrow/Arrow";
const CalltoAction = (props) => {
    return (
        <div className="cta">
            <span className="text">{props.text}</span>
            <Arrow />
        </div>
    );
};

export default CalltoAction;
