import React from 'react'
import '../Styles/Download-app.css'
import iphone2 from '../Images/iphon2.png'
import iphone3 from '../Images/iphone3.png'
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";


export default function Download_app() {
    return (
        <section className="download-app-body">
            <div className="container download-section">
                <div className="download-img">
                    <img src={iphone2} alt="" />
                    <img src={iphone3} alt="" />
                </div>

                <div className="download-text">
                    <h2>Download Your Amazing App Available Now.</h2>
                    <p>Horse play argy-bargy me old mucker boot bog show off show off pick your nose and blow off cack, cras buggered say.</p>

                    <div className="download-icon">
                        <div className="apple-icon">
                            <FaApple />
                        </div>
                        <div className="android-apple">
                            <FaAndroid />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
