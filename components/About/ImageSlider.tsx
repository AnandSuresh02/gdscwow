// components/HorizontalImageSlider.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
}

const HorizontalImageSlider: React.FC<Props> = ({ images }) => {
  // Your image slider logic here

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const centerIndex = Math.floor(images.length / 5); // Calculate the index of the center image

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="flex w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex - centerIndex) * (100 / images.length)}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/5 relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className={`transform transition-transform duration-500 ${index === centerIndex ? 'scale-125' : 'scale-100'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageSlider;
