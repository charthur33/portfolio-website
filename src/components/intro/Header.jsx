import React from "react";
import "./intro.css";

function Header() {

    //const aboutAnchor = document.querySelector("#about-section");
    

    return (
        <div>
            <header>
                <h1 className="name">Chris Arthur</h1>
                <div className="navbar">
                    <p className="nav-item" onClick={() => {
                          const anchor = document.querySelector("#about-section"); 
                          anchor.scrollIntoView({behavior: 'smooth', block: 'center'}); 
                        }} 
                    >About Me</p>
                    <p className="nav-item" onClick={() => {
                          const anchor = document.querySelector("#project-section"); 
                          anchor.scrollIntoView({behavior: 'smooth', block: 'center'}); 
                        }} 
                    >Projects</p>
                    <p className="nav-item" onClick={() => {
                          const anchor = document.querySelector("#resume-section"); 
                          anchor.scrollIntoView({behavior: 'smooth', block: 'center'}); 
                        }} 
                    >Resume</p>
                    <p className="nav-item" onClick={() => {
                          const anchor = document.querySelector("#contact-section"); 
                          anchor.scrollIntoView({behavior: 'smooth', block: 'center'}); 
                        }}  
                    >Contact</p>
                </div>
            </header>
        </div>
    );

}

export default Header;