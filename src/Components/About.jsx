import React from 'react'
import '../Styles/About.css'
import AboutItem from './Sub components/About_item'
import AboutIcon1 from '../Images/aloe-vera.png'
import AboutIcon2 from '../Images/color-balance.png'
import AboutIcon3 from '../Images/layers.png'


export default function About() {
    const item1 = {
        title : "Database Management",
        desc : "The little rotter bevvy mush cras gormless I lost the plot bender wind 1"
    }
    const item2 = {
        title : "Premium Plugins",
        desc : "The little rotter bevvy mush cras gormless I lost the plot bender wind 2"
    }
    const item3 = {
        title : "Security Potential",
        desc : "The little rotter bevvy mush cras gormless I lost the plot bender wind 3"
    }

    return (
        <section className="container about-body">
            <h2 className="about-title">About Security Features Stunning Design,Powerful User Experience.</h2>
            <div className="about-section">
                <AboutItem icon={AboutIcon1} title={item1.title} desc={item1.desc}/>
                <AboutItem icon={AboutIcon2} title={item2.title} desc={item2.desc}/>
                <AboutItem icon={AboutIcon3} title={item3.title} desc={item3.desc}/>

            </div>
        </section>

    );
}



