import React, { useState } from 'react';

const images = [
  require('../images/banner1.png'),
  require('../images/banner2.png'),
  require('../images/banner3.png'),
];

function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div className="w-full max-w-3xl relative">
        <img
          src={images[current]}
          alt={`Banner ${current + 1}`}
          className="w-full h-55 object-cover rounded-lg shadow-lg transition-all duration-700"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default BannerCarousel;
