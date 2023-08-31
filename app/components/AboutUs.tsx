import React from "react"
import { useNavigate } from "@remix-run/react"

export interface Props {
    heading: string,
    body: string,
    buttonText: string
}

export const AboutUs: React.FC<Props> = ({ heading, body, buttonText }) => {
    const navigate = useNavigate()
    return(
        <div className="white-section-outer">
            <div className="white-section-inner">
                <h1 id="about-us-heading" className="display-linebreak">{heading}</h1>
                <hr/>
                <div id="about-us-div" className="flex center wrap">
                    <h3 id="about-us-body" className="display-linebreak">{body}</h3>
                    <button id="about-us-cta" onClick={() => navigate("#contact-us")}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}