import React, { ReactNode }from "react"

interface TalkingPoint {
    title: string,
    body: string
}

export interface Props {
    heading: string,
    talkingPoints: TalkingPoint[],
    bulletIcon: ReactNode
}

const parseTalkingPoints = (talkingPoints: Props["talkingPoints"], bulletIcon: Props["bulletIcon"]) => {
    return talkingPoints.map((talkingPoint, index) => {
        return(
            <div key={`talking-point-${index}`} className="flex talking-point">
                <h2 className="talking-point-title">{talkingPoint.title}</h2>
                {bulletIcon}
                <h3 className="talking-point-body">{talkingPoint.body}</h3>
            </div>
        )
    })
        
}

export const ChooseUs: React.FC<Props> = ({ heading, talkingPoints, bulletIcon }) => {
    return(
        <div id="choose-us-outer" className="black-section-outer">
            <div id="choose-us-inner" className="black-section-inner">
                <div>
                    <h1 id="choose-us-heading" className="display-linebreak">{heading}</h1>
                    <hr/>
                </div>
                <div id="talking-points" className="flex">
                    {parseTalkingPoints(talkingPoints, bulletIcon)}
                </div>
            </div>
        </div>
        )
}