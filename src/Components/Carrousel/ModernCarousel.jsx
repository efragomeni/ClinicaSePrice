"use client"

import { useState, useEffect } from "react"
import "./modernCarousel.css"

const ModernCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000) // Cambia cada 7 segundos

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="modern-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel-container">
        {/* Slides */}
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? "active" : ""} ${
                index === (currentIndex - 1 + images.length) % images.length ? "prev" : ""
              } ${index === (currentIndex + 1) % images.length ? "next" : ""}`}
            >
              <div className="slide-image-container">
                <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="slide-image" />
                <div className="slide-overlay"></div>
              </div>

              {/* Content overlay */}
              <div className="slide-content">
                <div className="slide-text">
                  <h2 className="slide-title">
                    {index === 0 && "Atención Médica de Excelencia"}
                    {index === 1 && "Tecnología de Vanguardia"}
                    {index === 2 && "Cuidado Integral para tu Familia"}
                  </h2>
                  <p className="slide-description">
                    {index === 0 && "Profesionales altamente capacitados comprometidos con tu salud y bienestar"}
                    {index === 1 && "Equipamiento médico de última generación para diagnósticos precisos"}
                    {index === 2 && "Acompañamos cada etapa de tu vida con el mejor cuidado médico"}
                  </p>
                  <button className="slide-cta">
                    {index === 0 && "Conocer Especialidades"}
                    {index === 1 && "Ver Estudios"}
                    {index === 2 && "Solicitar Turno"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        {/* Dots Indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            >
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <div
            className="progress-bar"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
              transition: isAutoPlaying ? "width 5s linear" : "width 0.3s ease",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ModernCarousel
