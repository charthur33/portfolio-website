import React from "react";
import "./work.css";
import GitHubProject from "./GitHubProject";
import EmbeddedProject from "./EmbeddedProject";
import { gitHub, other } from "./projectInfo";
import postitImg from "../../images/post-it.PNG";
import spgImg from "../../images/spg-moto.PNG";
import keyboard1 from "../../images/keyboard1.PNG";
import keyboardProject from "../../images/keyboardProject.PNG";
import keyboardProject2 from "../../images/keyboardProject2.PNG";
import capstoneCode from "../other/CapstoneCode.pdf";

function ProjectSection() {
    return (
        <section id="project-section">

            <div className="container-fluid">
                <div className="project-section-title">
                    <h1>Projects</h1>
                    <p>Check out some of my projects.</p>
                </div>
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
                <div className="row">
                    <div className="col-lg-12 project-grid">
                        <EmbeddedProject
                            title={other[0].title}
                            description={other[0].description}
                            projectTitle={other[0].projectTitle}
                            img={keyboard1}
                            projectImg={keyboardProject}
                            projectImg2={keyboardProject2}
                            fileLink={capstoneCode}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;