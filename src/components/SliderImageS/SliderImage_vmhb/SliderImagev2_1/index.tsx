"use client";
import { useState } from "react";
import Card from "../../../Cards/Card";
import food1 from "@/components/images/sliderImagesv2/food1.jpg";
import food2 from "@/components/images/sliderImagesv2/food2.jpg";
import food3 from "@/components/images/sliderImagesv2/food3.jpg";
import food4 from "@/components/images/sliderImagesv2/food4.jpg";
import { Button } from "../../../ui/button";

export default function SliderImagev2_1() {
  const [startIndex, setStartIndex] = useState(0);

  const cards = [
    {
      title: "Spaghetti Lasagna",
      complexity: "Easy",
      time: "20Min",
      foodImage: food1.src,
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Medium",
      time: "5Min",
      foodImage: food2.src,
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Hard",
      time: "1Hour",
      foodImage: food3.src,
      role: "chef",
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Easy",
      time: "25Min",
      foodImage: food4.src,
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Easy",
      time: "20Min",
      foodImage: food1.src,
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Medium",
      time: "5Min",
      foodImage: food2.src,
      role: "chef",
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Hard",
      time: "1Hour",
      foodImage: food3.src,
    },
    {
      title: "Spaghetti Lasagna",
      complexity: "Easy",
      time: "25Min",
      foodImage: food4.src,
    },
  ];

  const displayCards = cards.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex < cards.length - 4) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center px-6 pt-10 pb-4 text-xl gap-3 text-gray-700">
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
        <h1 className="text-xl font-semibold text-gray-700 flex justify-center items-center text-center">
          Be Inspired With
        </h1>
        <h1>&mdash;&mdash;&mdash;&mdash;&mdash;</h1>
      </div>
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-800">
        Our Recipes
      </h1>
      <div className="group p-5">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:flex xl:flex">
          {displayCards.map((card, index) => (
            <Card
              key={startIndex + index}
              title={card.title}
              complexity={card.complexity}
              time={card.time}
              foodImage={card.foodImage}
              role={card.role}
              maxHeight="50vh"
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-3">
          <Button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="rounded-full bg-red-500 hover:bg-red-600"
          >
            {"<"}
          </Button>
          <Button
            onClick={handleNext}
            disabled={startIndex === cards.length - 4}
            className="rounded-full bg-red-500 hover:bg-red-600"
          >
            {">"}
          </Button>
        </div>
      </div>
    </>
  );
}
