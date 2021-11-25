import React from 'react'
import '../Styles/Footer.css'
import logo from '../Images/logomain.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="footer-body">
            <div className="container footer-section">
                <img src={logo} alt="" />
                <div className="footer-block">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h3>Service</h3>
                    <ul>
                        <li><a href="#">Managed IT</a></li>
                        <li><a href="#">IT Support</a></li>
                        <li><a href="#">Cecurity</a></li>
                        <li><a href="#">FAQ’s</a></li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h3>Office Location</h3>
                    <p><b className="footer-icon"><FaMapMarkerAlt /> </b> Kazi Nazrul Islam Avenue (Dhaka Trade Centre) Kawran Bazar, Dhaka-1215.</p>
                    <p><b className="footer-icon"><FaPhoneAlt /> </b> +880 1821 784 321</p>
                </div>

            </div>
        </footer>
    );
}
