import React from "react";
import "./work.css";

function GitHubProject(props) {
    return (
        <div className="project">
            <div className="card">
                <div className="card-header"><h3>{props.title}</h3></div>
                <div className="card-body">
                    <a href={props.application}>
                        <img src={props.img} className="card-img" alt="personal project"></img>
                    </a>
                    <div className="project-info">
                        <p className="card-text">{props.description}</p>
                        <p className="tech-text">{props.technologies}</p>
                        <a href={props.code} class="btn btn-secondary">Code</a>
                        <a href={props.application} class="btn btn-secondary">Deployed App</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GitHubProject;