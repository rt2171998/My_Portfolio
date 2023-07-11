import React, { useState } from "react";
import Container from "../../shared/container/Container";
import Filter from "./filter/Filter";
import Showcase from "./showcase/Showcase";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
        link: "https://jira-clone-rt.netlify.app",
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];
const Portfolio = () => {
    const [projects, SetProjects] = useState(projectsData);
    function filterHandle(tab) {
        if (tab === "all") {
            SetProjects([...projectsData]);
        } else {
            let filteredProject = projectsData.filter((item) =>
                item["tags"].includes(tab)
            );
            SetProjects(filteredProject);
        }
    }
    return (
        <Container
            background="light"
            title="Check My Portfolio"
        >
            <Filter filterProjects={(tab) => filterHandle(tab)} />
            <Showcase data={projects} />
        </Container>
    );
};

export default Portfolio;
