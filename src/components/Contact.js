import React from "react";
import star from "../images/Star 1.png"

const Contact = (props) => {
    
    return (
        <div className="card">
            {props.openSlots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={require("../imagesCards/" + props.img) } alt="hyu" className="card--image"/>
            <div className="card--stats">
            <img src={star} alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray-button">({props.reviewCount}) <span className="button-img">.</span> </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price}</span> / person</p> 
        </div>
    )
};

export default Contact;