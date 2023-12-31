import React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Review {
    name: string,
    text: string
}

export interface Props {
    heading: string,
    reviews: Review[]
}

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const parseReviews = (reviews: Props["reviews"]) => {
    return reviews.map((review, index) => {
        return (
            <div key={`carousel-item-${index}`} className="flex center review">
                <h3 className="review-name">{review.name}</h3>
                <h3 className="review-text">{review.text.length >= 250 ? review.text.slice(0,250) + '...' : review.text}</h3>
            </div>
        )
    })
}

export const Reviews: React.FC<Props> = ({ heading, reviews }) => {
    return(
            <div id="reviews-outer" className="black-section-outer">
                <div id="reviews-inner" className="black-section-inner">
                    <h1 id="reviews-heading" className="display-linebreak">{heading}</h1>
                    <hr/>
                    <div id="carousel" >
                        <AliceCarousel mouseTracking responsive={responsive} items={parseReviews(reviews)} controlsStrategy="alternate"/>
                    </div>
                </div>
            </div>
        )
}