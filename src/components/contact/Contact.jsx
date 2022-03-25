import React from "react";
import "./contact.css";

function Contact() {
    return (
        <section id="contact-section">
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact">
                <a href="https://www.linkedin.com/in/cwarthur/"><i class="fa-brands fa-linkedin fa-4x"></i></a>
                <a href="https://github.com/charthur33"><i class="fa-brands fa-github-square fa-4x"></i></a>
                <a href="mailto:c.william.arthur@gmail.com"><i class="fa-solid fa-square-envelope fa-4x"></i></a>
            </div>
        </section>
    );
}

export default Contact;