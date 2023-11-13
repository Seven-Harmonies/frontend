import React, { useState, useEffect } from "react";
import poza from "./1.png";
import pozaa from "./2.png";
import pozaaa from "./3.png";

const ImageCarousel = () => {
  const images = [poza, pozaa, pozaaa];
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
      <div className="image-text">Text pentru Imagine {currentIndex + 1}</div>
    </div>
  );
};

export default ImageCarousel;
