import React from "react";
import image from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="nav--logo">
            <img src={image} alt="hyu" className="navbar-pic"/>
        </nav>
    )
}