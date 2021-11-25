import React from 'react'
import '../Styles/Contact.css'
import Contactbg from '../Images/contact-bg.png'

export default function Contact() {
    return (
        <section className="contact-body">
            <div className="container contact-section">
                <img src={Contactbg} alt="" />

                <div className="input-section">

                    <h2>Get In Touch With Us</h2>
                    <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
                    <form action="" className="from-group">
                        <div className="input-group">
                            <input type="text" className="input" required placeholder="First Name"/>
                            <input type="text" className="input" required placeholder="Last Name"/>
                        </div>

                        <div className="input-group">
                            <input type="email" className="input" required placeholder="Email Address"/>
                            <input type="number" className="input" required placeholder="Phone No"/>
                        </div>

                        <textarea className="message-box" cols="30" rows="10" required placeholder="Message"></textarea>
                        <input type="submit" className="submit-message" value="Submit Now" />
                    </form>

                </div>

            </div>
        </section>
    );
}
