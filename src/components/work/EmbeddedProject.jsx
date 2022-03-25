import React from "react";
import "./work.css";

function EmbeddedProject(props) {
    return (
        <div className="project">
            <div className="card">
                <div className="card-header"><h3>{props.title}</h3></div>
                <div className="card-body">
                    <img src={props.img} className="card-img" alt="personal project"></img>
                    <div className="project-info">
                        <p className="card-text">{props.description}</p>

                        <button type="button" class="btn g-project-btn" data-bs-toggle="modal" data-bs-target="#eProjectModal">
                            View More
                        </button>
                        <a href={props.fileLink} className="btn g-project-btn">Code</a>
        
                        <div class="modal fade" id="eProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{props.projectTitle}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img src={props.projectImg} className="e-project-img" alt="personal project"></img>
                                        <img src={props.projectImg2} className="e-project-img" alt="personal project"></img>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn g-project-btn" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default EmbeddedProject;