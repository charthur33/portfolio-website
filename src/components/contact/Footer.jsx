import React from "react";
import "./contact.css";

function Footer() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <footer>
            <p>© Copyright {currentYear}</p>
        </footer>
    );
}

export default Footer;