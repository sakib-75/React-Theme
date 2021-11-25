import React from 'react'
import '../Styles/Pricing.css'
import Pricingitem from './Sub components/Pricing_item'
import pinkBall from '../Images/shape3.png'
import smPinkBall from '../Images/shape7.png'

export default function Pricing() {

    const price1 = {
        type : "Basic Package",
        price : "$5",
        timePeriod : "Daily",
        packageDesc : {
            package_1 : "1 team member",
            package_2 : "3 concurrent builds",
            package_3 : "400 GB bandwidth/month",
            package_4 : "1,000 build minutes/month",
            package_5 : "Slack & email notifications",
            package_6 : "Password-protected sites"
        }
    }

    const price2 = {
        type : "Standard Package",
        price : "$202",
        timePeriod : "Monthly",
        packageDesc : {
            package_1 : "1 team member",
            package_2 : "5 concurrent builds",
            package_3 : "600 GB+ bandwidth/month",
            package_4 : "Billing Admin role",
            package_5 : "Security: SSO, RBAC, DDoS mitigation",
            package_6 : "Self-hosted GitHub/GitLab integration"
        }
    }

    const price3 = {
        type : "Advance Package",
        price : "$909",
        timePeriod : "Monthly",
        packageDesc : {
            package_1 : "Custom contracts and invoicing",
            package_2 : "Architecture and integration review",
            package_3 : "Data processing agreement",
            package_4 : "Security and compliance review",
            package_5 : "Account manager",
            package_6 : "Log Drains integration with Datadog"
        }
    }


    return (
        <section className="container pricing-body">
            <img src={pinkBall} className="pink-ball-lg" alt="" />
            <h2 className="pricing-body-title">Choose the offering that works best for you.</h2>

            <div className="pricing-section">
                <Pricingitem pricing={price1}/>
                <Pricingitem pricing={price2}/>
                <Pricingitem pricing={price3}/>

            </div>
            <img src={smPinkBall} className="pink-ball-sm" alt="" />
            
        </section>
        
    );
}
