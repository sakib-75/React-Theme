import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Blog_item(props) {
    let {img, date, title} = props;


    return (
        <div>
            <img src={img} className="blog-image" alt="" />

            <div className="blog-text">
                <span>{date}</span>
                <h3>{title}</h3>
                <a href="#">Read More <FaArrowRight /> </a>
            </div>
            
        </div>
    );
}
