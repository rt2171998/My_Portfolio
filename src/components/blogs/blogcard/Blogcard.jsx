import React from "react";
import Arrow from "../../../shared/arrow/Arrow";
import "./blogcard.scss";
const Blogcard = ({ user, image, date, title, description }) => {
    return (
        <div className="card-wrapper">
            <div className="image-cont">
                <img
                    src={image}
                    alt="blog"
                />
            </div>
            <div className="content-cont">
                <div className="user-detail">
                    <div className="user">{user}</div>
                    <div className="date">{date}</div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="go-to-blog">
                    <span>Read More</span>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default Blogcard;
