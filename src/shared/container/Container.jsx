import React from "react";
import "./container.scss";
const Container = ({ children, id, classname, title, background }) => {
    return (
        <div
            id={id ? id : ""}
            className={`container ${classname ? classname : ""} ${
                background === "dark" ? "dark" : "light"
            }`}
        >
            <div className="content">
                {title && (
                    <div className="title">
                        <h1 className="title">{title}</h1>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default Container;
