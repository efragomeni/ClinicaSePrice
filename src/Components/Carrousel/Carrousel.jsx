import  { useState, useEffect } from "react";
import "./carrousel.css";

const Carrousel =({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cambiar slide automáticamente cada 'interval' milisegundos
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]); // cada vez que cambia el índice o el intervalo

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

export default Carrousel;