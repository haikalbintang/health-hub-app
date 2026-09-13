"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionDiv from "@/components/SectionDiv";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}
const SliderV3: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [middleIndex, setMiddleIndex] = useState(0);

  const goToPrevious = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const previousIndex = middleIndex === 0 ? images.length - 1 : middleIndex - 1;
  const nextIndex = middleIndex === images.length - 1 ? 0 : middleIndex + 1;

  return (
    <section>
      <SectionDiv>Our Ranges</SectionDiv>
      <SectionTitle>For All Your Desires </SectionTitle>

      <div className="flex justify-center items-center py-7">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-96 p-3">
          <div className="col-span-1 row-span-2">
            <Image
              height={400}
              width={600}
              className="object-cover rounded-xl h-full"
              src={images[middleIndex]}
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              height={200}
              width={600}
              className="object-cover rounded-xl h-full"
              src={images[previousIndex]}
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              height={200}
              width={600}
              className="object-cover rounded-xl h-full "
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
    </section>
  );
};

export default SliderV3;
