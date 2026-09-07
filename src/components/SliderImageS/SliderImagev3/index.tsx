"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";

interface ImageSliderProps {
  images: string[];
}
const SliderV3: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [middleIndex, setMiddleIndex] = useState(0);

  const goToPrevious = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const previousIndex = middleIndex === 0 ? images.length - 1 : middleIndex - 1;
  const nextIndex = middleIndex === images.length - 1 ? 0 : middleIndex + 1;

  return (
    <div className="">
      <div className="flex justify-center items-center px-6 pt-10 pb-4 text-xl gap-3 text-gray-700">
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
        <h1 className="text-xl font-semibold text-gray-700 flex justify-center items-center text-center">
          Our Ranges
        </h1>
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
      </div>
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-800">
        For All Your Desires
      </h1>
      <div className="flex justify-center items-center py-7">
        <div className="grid grid-cols-4 grid-rows-4 gap-3 h-96 p-3">
          <div className="col-span-2 row-span-4">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={images[middleIndex]}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={images[previousIndex]}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={images[nextIndex]}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button onClick={goToPrevious} className="rounded-full bg-red-500">
          {"<"}
        </Button>
        <Button onClick={goToNext} className="rounded-full bg-red-500">
          {">"}
        </Button>
      </div>
    </div>
  );
};

export default SliderV3;
