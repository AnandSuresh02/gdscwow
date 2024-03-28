// components/HorizontalImageSlider.js
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

const HorizontalImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="flex h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill" // Fill the container
              objectFit="cover" // Maintain aspect ratio and cover container
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageSlider;
