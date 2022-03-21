import React from "react";
import "./work.css";

function GitHubProject(props) {
    return (
        <div className="project">
            <div className="card">
                <div className="card-header"><h3>{props.title}</h3></div>
                <div className="card-body">
                    <img src={props.img} className="card-img" alt="personal project"></img>
                    <p className="card-text">{props.description}</p>
                    <p className="tech-text">{props.technologies}</p>
                    <a href={props.code} class="btn btn-primary">Code</a>
                    <a href={props.application} class="btn btn-primary">Deployed App</a>
                </div>
            </div>
        </div>
    );
}

export default GitHubProject;