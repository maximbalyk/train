import React from "react";

export const CarouselItem = ({children, width,price}) => {
    return(
        <div className="carousel-item" style={{width: width}}>
            <div className="card">
                <div className="head">
                    <h2>{children}</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="price">{price}</div>
            </div>

        </div>
    )
}