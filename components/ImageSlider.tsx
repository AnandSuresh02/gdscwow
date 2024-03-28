// components/VerticalImageSlider.js
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

const VerticalImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-transform duration-500 ${
            index === currentIndex ? 'scale-110' : 'scale-100'
          }`}
          style={{
            top: `${index * 100}%`,
            transform: `translateY(-${currentIndex * 100}%)`,
            width: '100%',
            height: '100%', // Ensure full coverage for Next.js Image
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill" // Fill the container
            objectFit="cover" // Maintain aspect ratio and cover container
          />
        </div>
      ))}
    </div>
  );
};

export default VerticalImageSlider;
