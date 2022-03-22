import React from "react";
import "./work.css";
import GitHubProject from "./GitHubProject";
import { gitHub, other } from "./projectInfo";
import postitImg from "../../images/post-it.PNG";
import spgImg from "../../images/spg-moto.PNG";


function ProjectSection() {
    return (
        <section id="project-section">
            <div className="project-section-title">
                <h1>Projects</h1>
                <p>Check out some of my projects.</p>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 project-grid">
                        <GitHubProject
                            title={gitHub[0].title}
                            technologies={gitHub[0].technologies}
                            description={gitHub[0].description}
                            img={postitImg}
                            code={gitHub[0].codeLink}
                            application={gitHub[0].deployLink}
                        />
                    </div>
                    <div className="col-lg-6 project-grid">
                        <GitHubProject
                            title={gitHub[1].title}
                            technologies={gitHub[1].technologies}
                            description={gitHub[1].description}
                            img={spgImg}
                            code={gitHub[1].codeLink}
                            application={gitHub[1].deployLink}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;