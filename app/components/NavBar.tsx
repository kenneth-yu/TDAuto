import React, { useEffect} from "react"
import { Link, useLocation } from "@remix-run/react";

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
    // return links.map((link, index) => <div key={`nav-option-${index}`} className='nav-option'>{link.text}</div>)
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
                    <Link id='nav-address' className='nav-option' to='https://www.google.com/maps/dir//T+%26+D+Auto+Repair+896+4th+Ave+Brooklyn,+NY+11232/@40.6562978,-74.0028134,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4065f096ac24cb8b:0x72b14f44749f014e'>{address}</Link>
                </div>
            </div>
        </div>
        )

}