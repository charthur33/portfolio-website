import React from "react";
import "./intro.css";

function Header() {

    return (
        <header>
            <h1 className="name">Chris Arthur</h1>
            <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        Menu 
                        <i class="fa-solid fa-bars"> </i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <p className="nav-link" id="about" onClick={() => {
                                const anchor = document.querySelector("#about-section");
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            >About</p>
                            <p className="nav-link" id="projects" onClick={() => {
                                const anchor = document.querySelector("#project-section");
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            >Projects</p>
                            <p className="nav-link" id="resume" onClick={() => {
                                const anchor = document.querySelector("#resume-section");
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            >Resume</p>
                            <p className="nav-link" id="contact" onClick={() => {
                                const anchor = document.querySelector("#contact-section");
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            >Contact</p>

                        </div>
                    </div>

            </nav>
        </header>

    );

}

export default Header;