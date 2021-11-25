import React from 'react'
import { FcCheckmark } from "react-icons/fc";


export default function Pricing_item(props) {
    const {pricing : {type, price, timePeriod, packageDesc}} = props;

    return (
        <div className="pricing-item">
            <p>{type}</p>
            <h2>{price}</h2>
            <span>{timePeriod}</span>
            <ul className="package-list">
                <li><FcCheckmark /> {packageDesc.package_1}</li>
                <li><FcCheckmark /> {packageDesc.package_2}</li>
                <li><FcCheckmark /> {packageDesc.package_3}</li>
                <li><FcCheckmark /> {packageDesc.package_4}</li>
                <li><FcCheckmark /> {packageDesc.package_5}</li>
                <li><FcCheckmark /> {packageDesc.package_6}</li>
            </ul>

            <button className="choose-plan-btn">Choose Plan</button>
        </div>
    );
}
