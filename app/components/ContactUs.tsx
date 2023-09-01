import React from "react"
import { Link } from "@remix-run/react";
import { PhoneIcon, CellphoneIcon, EmailIcon, ClockIcon, LocationIcon, gMapUrl } from "~/consts"

export interface Props {
    leftSection:{
        heading: string,
        phoneNumber: {
            text:string,
            number:number
        },
        cellNumber: {
            text:string,
            number:number
        },
        email: string
    },
    rightSection:{
        heading: string,
        hours: string,
        address: string
    }
}

export const ContactUs: React.FC<Props> = ({ leftSection, rightSection }) => {

    const { heading, phoneNumber, cellNumber, email } = leftSection
    const { hours, address } = rightSection

    return(
        <div id="contact-us" className="black-section-outer">
            <div id="contact-us-section" className="black-section-inner flex">
                <div id="left-section">
                    <h1 id="left-section-heading" className="display-linebreak">{heading}</h1>
                    <hr/>
                    <div>
                        <Link to={`tel:${phoneNumber.number}`} className="flex align-center contact-link">
                            {PhoneIcon}
                            <h3>{phoneNumber.text}</h3>
                        </Link>
                        <Link to={`tel:${cellNumber.number}`} className="flex align-center contact-link">
                            {CellphoneIcon}
                            <h3>{cellNumber.text}</h3>
                        </Link>
                        <Link to={`mailto:${email}`} className="flex align-center contact-link">
                            {EmailIcon}
                            <h3>{email}</h3>
                        </Link>
                    </div>
                </div>
                <div id="right-section">
                    <h1 id="right-section-heading" className="display-linebreak">{rightSection.heading}</h1>
                    <hr/>
                    <div>
                        <div className="flex align-center">
                            {ClockIcon}
                            <h3 className="display-linebreak">{hours}</h3>
                        </div>
                        <Link to={gMapUrl} target="_blank" className="flex align-center contact-link">
                            {LocationIcon}
                            <h3>{address}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}