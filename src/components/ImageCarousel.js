import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";


const ImageCarousel = () => {
  const images = ['/images/forest2.jpg', '/images/conifer1.jpg','/images/trees1.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="image-carousel" style={{ position: "relative" }}>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="carousel-overlay">
      <div className="carousel-text">
        <h1>Extend a hand, make an impact!</h1>
        <p>Start helping by volunteering today!</p>
      </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
