import React, { useState } from "react";
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <>
      <div {...handlers} className="carousel">
        <div
          {...handlers}
          className="inner"
          style={{ transform: `translate(-${activeIndex * 50}%)` }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { width: "50%" });
          })}
        </div>
      </div>
      <div className="indicators">
        <button
          className="glowing-btn"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="glowing-txt">
            P<span className="faulty-letter">R</span>EV
          </span>
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex
                  ? "active glowing-btn-number"
                  : "glowing-btn-number"
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className="glowing-btn"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="glowing-txt">
            N<span className="faulty-letter">E</span>XT
          </span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
