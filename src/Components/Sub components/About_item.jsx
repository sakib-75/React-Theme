import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function About_item(props) {
    let {icon, title, desc} = props;

    return (
        <div className="about-item">

            <img src={icon} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">Read More <FaArrowRight/> </a>
        
        </div>
    );
}

