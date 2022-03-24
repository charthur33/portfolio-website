import React from "react";
import "./intro.css";
import chrisPic from "../../images/chris.png";

function About() {
    return (
        <section id="about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 title">
                        <div className="intro-wrapper">
                            <h2 className="intro-text">Hello, my name is</h2>
                            <h1 className="i-name">Chris Arthur</h1>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Electrical Engineer</div>
                                    <div className="i-title-item">Full-Stack Developer</div>
                                    <div className="i-title-item">Team Builder</div>
                                    <div className="i-title-item">Product Designer</div>
                                    <div className="i-title-item">Creative Generalist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 profile-pic-wrapper">
                        <img className="profile-pic" src={chrisPic} alt="profile pic"></img>
                        <div className="container-fluid about-me-text">
                            <div className="about-me-title">
                                <h2>My Background</h2>
                            </div>
                            <p>I'm an embedded systems engineer currently transistioning to working on cloud-based software and full-stack applications.
                                I recently compeleted a full-stack development bootcamp and am looking for opportunites to apply my skills on new technologies that improve peoples' lives. In my free time you will most likely find me 
                                playing music, partaking in extreme outdoor sports, or enjoying the occasional Sunday afternoon at a craft brewery. Please find some of my recent projects and contact information below. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;