import React from "react";
import "./work.css";
import Project from "./Project";

function ProjectSection() {
    return (
        <section id="project-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <Project />
                    </div>
                    <div className="col-lg-6">
                        <Project />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;