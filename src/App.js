import React from "react";
import Intro from "./components/Intro/Intro";
import "./App.scss";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
        </div>
    );
};

export default App;
