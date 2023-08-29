import React from "react"

export interface NavItem {
    text: string
}

export interface Props {
    logo: string,
    logoText: string,
    links: NavItem[],
    contactUs: string,
    address: string
}

const parseNavOptions = (links: Props["links"]) => {
    return links.map((link, index) => <div key={`nav-option-${index}`} className='nav-option'>{link.text}</div>)
}

export const NavBar: React.FC<Props> = ({ logo, logoText, links, contactUs, address }) => {
    return(
        <div id="nav-bar" className="flex">
            <div id='nav-logo-div'>
                <img id='nav-logo' src={logo}/>
                <span>{logoText}</span>
            </div>
            {parseNavOptions(links)}
            <div>{contactUs}</div>
        </div>
        )

}