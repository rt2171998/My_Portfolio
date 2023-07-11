import React from "react";
import Arrow from "../../../shared/arrow/Arrow";
import "./showcase.scss";
const Showcase = ({ data }) => {
    return (
        <div className="showcase-container">
            {data.map((project) => {
                return (
                    <div
                        key={project.id}
                        className="project-item"
                        onClick={() => (window.location.href = project.link)}
                    >
                        <div className="meta-content">
                            <h3>{project.name}</h3>
                            <div className="go-to-cta">
                                <span>Project Details</span>
                                <Arrow />
                            </div>
                        </div>
                        <img
                            src={project.media.thumbnail}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Showcase;
