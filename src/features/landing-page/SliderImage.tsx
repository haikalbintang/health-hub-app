"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import image1 from "@/components/images/1.jpg";
import image2 from "@/components/images/2.png";
import Image from "next/image";

const images = [image1.src, image2.src];
const MAX_HEIGHT = 500;

function SliderImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="px-3 py-1">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          height={500}
          width={1000}
          alt="Slider"
          className="w-full h-full object-cover rounded-3xl"
          style={{
            maxHeight: `${MAX_HEIGHT}px`,
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
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 2xl:left-28 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l focus:outline-none z-10"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 2xl:right-28 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r focus:outline-none z-10"
          >
            &gt;
          </button>
          <div className="flex justify-center">
            <Button
              className={`h-12 px-8 text-lg font-semibold bg-red-500 text-white rounded-full z-10`}
            >
              Discover Now !
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderImage;
