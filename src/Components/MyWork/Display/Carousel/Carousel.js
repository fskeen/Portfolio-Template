import React from 'react';
import {StyledCarousel} from './Carousel.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ModalCarousel (props) {
    const {carousel} = props.project;
    return (
        <StyledCarousel 
            infiniteLoop 

            showThumbs={false} 
            useKeyboardArrows={true}
            showStatus={false}
            >
            {carousel.map((image, i) => {
            return (
                <div>
                    <img src={image} key={i} />
                </div>)
            })}
        </StyledCarousel>
    )
    
}

export default ModalCarousel;