import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://mshanken.imgix.net/wso/Articles/2019/IQ_HowToStore_1600.jpg",
    "https://static01.nyt.com/images/2022/01/13/dining/13pour1/13pour1-superJumbo.jpg",
    "https://www.tastingtable.com/img/gallery/15-liquors-your-home-bar-should-have/intro-1661193875.jpg",
    "https://img.pikbest.com/wp/202348/alcohol-bottle-3d-rendering-of-white-scene-with-blue-gel_9779187.jpg!sw800"
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
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
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
