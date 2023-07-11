import React from "react";
import Container from "../../shared/container/Container";
import "./skills.scss";
import skill from "../../images/tech-icons.png";
import CalltoAction from "../../shared/Cta/CalltoAction";
const Skills = () => {
    return (
        <Container
            background="dark"
            id="skills"
        >
            <div className="skill-section">
                <div className="skill-img">
                    <img
                        src={skill}
                        alt="skills images"
                    />
                </div>
                <div className="skill-desc">
                    <div className="title">Skills</div>
                    <div className="skill-icons">
                        jsnsdjdsdbbdjbjdbkdbkbdnsddjsnddjsnd
                    </div>
                    <CalltoAction text="Download CV" />
                </div>
            </div>
        </Container>
    );
};

export default Skills;
