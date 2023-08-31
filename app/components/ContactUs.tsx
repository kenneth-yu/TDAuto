import React from "react"
import { PhoneIcon, CellphoneIcon, EmailIcon, ClockIcon, LocationIcon } from "~/consts"

export interface Props {
    leftSection:{
        heading: string,
        phoneNumber: string,
        cellNumber: string,
        email: string
    },
    rightSection:{
        heading: string,
        hours: string,
        address: string
    }
}

export const ContactUs: React.FC<Props> = ({ leftSection, rightSection }) => {
    return(
        <div className="black-section-outer">
            <div id="contact-us-section" className="black-section-inner flex">
                <div id="left-section">
                    <h1 id="left-section-heading" className="display-linebreak">{leftSection.heading}</h1>
                    <hr/>
                    <div>
                        <div className="flex align-center">
                            {PhoneIcon}
                            <h3>{leftSection.phoneNumber}</h3>
                        </div>
                        <div className="flex align-center">
                            {CellphoneIcon}
                            <h3>{leftSection.cellNumber}</h3>
                        </div>
                        <div className="flex align-center">
                            {EmailIcon}
                            <h3>{leftSection.email}</h3>
                        </div>
                    </div>
                </div>
                <div id="right-section">
                    <h1 id="right-section-heading" className="display-linebreak">{rightSection.heading}</h1>
                    <hr/>
                    <div>
                        <div className="flex align-center">
                            {ClockIcon}
                            <h3 className="display-linebreak">{rightSection.hours}</h3>
                        </div>
                        <div className="flex align-center">
                            {LocationIcon}
                            <h3>{rightSection.address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}