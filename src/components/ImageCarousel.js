import React, { useState, useEffect } from "react";


const ImageCarousel = () => {
  const images = ['/images/3.png', '/images/2.png','/images/1.png'];
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
      
    </div>
  );
};

export default ImageCarousel;
