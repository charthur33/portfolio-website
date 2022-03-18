import React from "react";
import "./work.css";
import Project from "./Project";

function ProjectSection() {
    return (
        <section id="project-section">
            <div className="projects">
                <Project />
                <Project />
            </div>
        </section>
    );
}

export default ProjectSection;