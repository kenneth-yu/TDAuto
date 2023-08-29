import React from "react"

export interface Props {
    logo: string,
    bgLogo: string
}

export const Hero: React.FC<Props> = ({ logo, bgLogo }) => {
    return(
        <div id="hero" className="flex">
            <img id='hero-bg' src={bgLogo}/>
            <img id='hero-logo' src={logo}/>
        </div>
        )
}