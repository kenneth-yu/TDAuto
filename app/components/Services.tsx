import React, { ReactNode } from "react"

export interface serviceOption {
    label: string,
    icon: ReactNode
}

export interface Props {
    heading: string,
    logo: string,
    serviceOptions: serviceOption[]
}

const parseServiceOptions = (serviceOptions: Props["serviceOptions"]) =>{
    return serviceOptions.map((serviceOption, index) => {
        return (<div key={`service-option-${index}`} className="stacked-logo-text">
            {serviceOption.icon}
            <span>{serviceOption.label}</span>
        </div>)
    })
}

export const Services: React.FC<Props> = ({ heading, logo, serviceOptions }) => {
    return(
        <div id="services-outer" className="white-section-outer">
            <div id="services-inner" className="white-section-inner">
                <div id='service-heading' className="flex">
                    <div>
                        <h1 id="service-title" className="display-linebreak">{heading}</h1>
                        <hr/>
                    </div>
                    <img id="ase-logo" src={logo}/>
                </div>
                <div id="service-options">
                    {parseServiceOptions(serviceOptions)}
                </div>
            </div>
        </div>
    )
}