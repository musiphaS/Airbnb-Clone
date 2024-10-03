import React from "react";
import imagegrid from "../images/photo-grid.png";

export default function Banner() {
    return (
        <section className="banner">
            <img src={imagegrid} className="banner--photo" alt="banner-photo"/>
            <h1 className="banner--header">Online Experiences</h1>
            <p className="banner--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}