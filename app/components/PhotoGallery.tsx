import React from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Image {
    src: string,
    altText?: string
}

export interface Props {
    heading: string,
    images: Image[]
}

const parseImages = (images: Props["images"]) => {
    return images.map((image)=>{
        return (
            {
                original: image.src,
                originalAlt: image.altText,
                thumbnail: image.src,
            }
        )
    })
}

export const PhotoGallery: React.FC<Props> = ({ heading, images }) => {
    return(
        <div id="photo-gallery" className="white-section-outer">
            <div className="white-section-inner">
                <h1 id="photo-gallery-heading" className="display-linebreak">{heading}</h1>
                <hr/>
                <ImageGallery autoPlay={true} useBrowserFullscreen={false} infinite={true} items={parseImages(images)}/>
            </div>
        </div>
        )
}