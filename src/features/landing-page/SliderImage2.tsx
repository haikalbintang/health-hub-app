"use client";
import { useState } from "react";
import Card from "@/components/Card";
import { cards } from "@/data/data";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import SectionDiv from "@/components/SectionDiv";

export default function SliderImage2() {
  const [startIndex, setStartIndex] = useState(0);

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
      <SectionDiv>Be Inspired With</SectionDiv>
      <SectionTitle>Our Recipes</SectionTitle>

      <div className="group p-5">
        <ul className="flex flex-wrap justify-center items-center gap-8 lg:flex xl:flex">
          {displayCards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </ul>
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
