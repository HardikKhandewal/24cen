import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "wine-6.jpeg",
    "wine-3.jpeg",
    "pharma-3.jpg",
    "liqour-1.jpg",
    "olive-1.jpg"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={slide} className="w-full h-full object-contain" alt={`Slide ${index + 1}`} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={handlePrev}>❮</button>
          <button className="btn btn-circle" onClick={handleNext}>❯</button>
        </div>
      </div>
    ))}
  </div>
);
};

export default Carousel;
