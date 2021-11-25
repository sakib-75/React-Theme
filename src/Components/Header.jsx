import React from 'react'
import '../Styles/Header.css'
import logo from '../Images/logomain.png'
import { BiLock } from "react-icons/bi";
import heroImg from '../Images/vevtorobject.png'
import ballShape from '../Images/shape4.png'
import { FaBars } from "react-icons/fa";

export default function header() {

    const menuFunction = () => {
        var x = document.querySelector(".nav-list");
        if (x.style.display == "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    return (
        <header className="header-section">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />

                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li><a href="#" className="nav-link">Home</a></li>
                            <li><a href="#" className="nav-link">About us</a></li>
                            <li><a href="#" className="nav-link">Service</a></li>
                            <li><a href="#" className="nav-link">Blog</a></li>
                            <li><a href="#" className="nav-link">Pricing</a></li>
                            <li><a href="#" className="nav-link">Contact us</a></li>
                        </ul>
                    </nav>
                    
                    <div className="signin-menu-btn">
                        <button className="signin-btn"> <BiLock /> Sign In</button>
                        <button className="menu-bar" onClick={menuFunction}> <FaBars/> </button>
                    </div>
                </div>
                <img src={ballShape} className="ball" alt="" />

                <div className="hero-section">
                    <div className="text-block">
                        <h1 className="header-title">Creative Appz Landing in the market.</h1>
                        <p>Charles tosser quaint twit bamboozled burke brown bread I naff I don't want no agro say blimey.!!</p>
                        <button className="free-trail-btn">Free Trail</button>
                    </div>

                    <img src={heroImg} className="hero-img" alt="" />
                </div>
            </div>
        </header>
    );
}


