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
                                    <div className="i-title-item">Engineer</div>
                                    <div className="i-title-item">Software Developer</div>
                                    <div className="i-title-item">Team Builder</div>
                                    <div className="i-title-item">Product Designer</div>
                                    <div className="i-title-item">Creative Generalist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 profile-pic">
                        <img className="pic" src={chrisPic} alt="profile pic"></img>
                        
                        <div className="container-fluid about-me-text">
                            <p>I'm an embedded systems engineer currently transistioning to the world of cloud-based software applications and full-stack development.
                                I'm passionate about technologies that improve the lives of ordinary people and I have broad experience in large-scale product development and verification. I also have a proven track record of team building
                                and fostering cross-organizational relationships in order to effectively solve difficult problems. In my free time you will most likely find me 
                                playing music, participating in extreme outdoor sports, or enjoying the occasional afternoon at a craft brewery. Please find some of my recent projects and contact information below. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;