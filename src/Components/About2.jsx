import React from 'react'
import '../Styles/About2.css'
import about2Img from '../Images/appabout.png'
import settingIcon from '../Images/fetures3.png'
import { FaArrowRight } from "react-icons/fa";

export default function About2() {
    return (
        <section className="container about2-body">
            
            <img src={about2Img} className="about2-img" alt="" />
            <div className="about2-text">
                <div className="about2-icon">
                    <img src={settingIcon} alt="" />
                </div>
               
                <h2>We Create innovative solution that works pragmatically.</h2>
                <p>You mug dropped a clanger barmy David brown bread bleeding crikey say chimney pot me old mucker bugger super.</p>
                <a href="#">Read More <FaArrowRight /> </a>

            </div>

        </section>
    );
}
