import React from "react";
import Container from "../../shared/container/Container";
import "./blogs.scss";
import Blogcard from "./blogcard/Blogcard";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";

const Blogs = () => {
    return (
        <Container
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blog-container">
                <Blogcard
                    user="John Doe"
                    date="mar 8 2022"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <Blogcard
                    user="John Doe"
                    date="mar 8 2022"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <Blogcard
                    user="John Doe"
                    date="mar 8 2022"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </Container>
    );
};

export default Blogs;
