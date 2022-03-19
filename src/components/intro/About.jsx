import React from "react";
import "./intro.css";
import chrisPic from "../../images/chris.png";

function About() {
    return (
        <section id="about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 about">
                        <div className="intro-wrapper">
                            <h2 className="intro-text">Hello, My name is</h2>
                            <h1 className="i-name">Chris Arthur</h1>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Engineer</div>
                                    <div className="i-title-item">Software Developer</div>
                                    <div className="i-title-item">Team Builder</div>
                                    <div className="i-title-item">Product Designer</div>
                                    <div className="i-title-item">Problem Solver</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 profile-pic">
                        <img className="pic" src={chrisPic} alt="profile pic"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;