import React from 'react'
import '../Styles/Social-share.css'
import Slack from '../Images/slack.png'
import Twitter from '../Images/twitter.png'
import Drive from '../Images/google-drive.png'
import Behance from '../Images/behance.png'
import { FaArrowRight } from "react-icons/fa";


export default function Social_share() {
    return (
        <section className="container share-body">
            <h2>Shine the new light on the digital world</h2>
            <p>Charles tosser quaint twit bamboozled burke brown bread I naff I don't want no agro say blimey.!!</p>

            <div className="social-section">
                <div className="social-item">
                    <img src={Slack} alt="" />
                    <div>
                        <h4>Slack</h4>
                        <span>Messanger</span>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="social-item">
                    <img src={Twitter} alt="" />
                    <div>
                        <h4>Twitter</h4>
                        <span>Messanger</span>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="social-item">
                    <img src={Drive} alt="" />
                    <div>
                        <h4>Drive</h4>
                        <span>Messanger</span>
                    </div>
                    <FaArrowRight />
                </div>

                <div className="social-item">
                    <img src={Behance} alt="" />
                    <div>
                        <h4>Behance</h4>
                        <span>Messanger</span>
                    </div>
                    <FaArrowRight />
                </div>

            </div>

        </section>
    );
}
