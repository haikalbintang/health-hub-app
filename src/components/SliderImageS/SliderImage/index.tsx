"use client";
import React, { useEffect } from "react";
import { Button } from "../../ui/button";

interface ImageSliderProps {
  images: string[];
  maxHeight?: string;
  className?: string;
}

const SliderImage: React.FC<ImageSliderProps> = ({
  images,
  maxHeight,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="px-3">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover rounded-3xl"
          style={{
            maxHeight: `${maxHeight}px`,
            maxWidth: "150vh",
            display: "block",
            margin: "0 auto",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="text-center">
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
              <h1 className="text-4xl lg:text-9xl font-extrabold text-white mb-4 text-center">
                Escape to Italy
              </h1>
              <h2 className="text-2xl font-semibold text-white text-center">
                Discover our Italian recipes
              </h2>
            </div>
          </div>
          {/* <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 2xl:left-40 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l focus:outline-none z-10"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 2xl:right-40 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r focus:outline-none z-10"
          >
            &gt;
          </button> */}
          <div className="flex justify-center">
            <Button
              className={`${className} h-12 px-8 text-lg font-semibold bg-red-500 text-white rounded-full z-10`}
            >
              Discover Now !
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
