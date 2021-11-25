import React from 'react'
import '../Styles/Feature.css'
import mobileImg from '../Images/mockup.png'
import feature1 from '../Images/f1.png'
import feature2 from '../Images/f2.png'
import feature3 from '../Images/f3.png'
import feature4 from '../Images/f4.png'


export default function Feature() {
    return (
        <section className="container feature-body">
            <div className="feature-section">
                <h2>A new way to manage your work, tasks and projects.</h2>

                <div className="feature-block">
                    
                    <div className="feature-item">
                        <div className="feature-icon">
                            <img src={feature1} alt="" />
                        </div>
                        
                        <h4>Security Maintenance</h4>
                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <img src={feature2} alt="" />
                        </div>

                        <h4>Backup Database</h4>
                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <img src={feature3} alt="" />
                        </div>

                        <h4>Server Maintenance</h4>
                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <img src={feature4} alt="" />
                        </div>

                        <h4>No Risk Protectable</h4>
                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                    </div>
                </div>
            </div>

            <img src={mobileImg} className="feature-mobile" alt="" />
        </section>
    );
}






