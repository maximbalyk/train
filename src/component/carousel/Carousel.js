import React, {useState} from "react";
import "./Carousel.css"

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

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1
        }

        setActiveIndex(newIndex)
    }
    return(
        <div className="carousel">
            <div
                className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child,index) => {
                    return React.cloneElement(child, {width:"100%"})
                })}
            </div>
            <div className="indicators">
                <button
                    onClick={() => {
                        updateIndex(activeIndex-1)
                    }}
                >
                    prev
                </button>
                {React.Children.map(children, (child,index) => {
                    return(
                        <button
                            onClick={() => {
                            updateIndex(index)
                            }}
                        >
                            {index+1}
                        </button>
                    )
                })}
                <button
                    onClick={() => {
                        updateIndex(activeIndex+1)
                    }}
                >
                    next
                </button>
            </div>
        </div>
    )
}
export default Carousel