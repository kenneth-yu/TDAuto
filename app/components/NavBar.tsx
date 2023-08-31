import React from "react"
import { Link } from "@remix-run/react";
import { gMapUrl } from "~/consts"

interface NavItem {
    text: string
    src: string
}

interface ContactInfo {
    text: string,
    phoneNumber: number
}

export interface Props {
    logo: string,
    logoText: string,
    links: NavItem[],
    contactInfo: ContactInfo,
    address: string
}

const parseNavOptions = (links: Props["links"]) => {
    return links.map((link, index) => <Link to={`#${link.src}`} key={`nav-option-${index}`} className='nav-option' reloadDocument>{link.text}</Link>)
}

export const NavBar: React.FC<Props> = ({ logo, logoText, links, contactInfo, address }) => {
    return(
        <div id="nav-bar">
            <div id="nav-bar-content" className="flex">
                <Link to='' id='nav-logo-div'>
                    <img id='nav-logo' src={logo}/>
                    <span>{logoText}</span>
                </Link>
                {parseNavOptions(links)}
                <div id="nav-bar-contact-info" className="flex">
                    <Link id='nav-phone-number' className='nav-option' to={`tel:+${contactInfo.phoneNumber}`}>{contactInfo.text}</Link>
                    <Link id='nav-address' className='nav-option' to={gMapUrl} target="_blank">{address}</Link>
                </div>
            </div>
        </div>
        )

}