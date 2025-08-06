import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
      </div>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
