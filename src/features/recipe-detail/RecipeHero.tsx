import React from "react";
import Image from "next/image";
import RightArrow from "./RightArrow";

export default function RecipeHero({
  id,
  title,
  image,
  servings,
  time,
  complexity,
}: {
  id: number;
  title: string;
  image: string;
  servings: number;
  time: string;
  complexity: string;
}) {
  return (
    <div className="px-10 pt-1">
      <div className="relative w-full flex justify-center items-center rounded-3xl overflow-hidden">
        <Image
          className="h-[50vh] object-cover rounded-3xl w-full"
          height={1500}
          width={1500}
          src={image}
          alt={title}
        />

        {/* Soft gradient for legibility, not heavy overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent px-10" />

        <h1 className="absolute flex justify-center items-center text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl sm:tracking-wider font-bold py-2 px-4">
          {title}
        </h1>

        {/* White box */}
        <div className="absolute bottom-6 flex justify-center items-center rounded-full pl-3 pr-4 bg-white h-14 gap-3">
          <RightArrow>{servings} people</RightArrow>
          <RightArrow>{time} minutes</RightArrow>
          <RightArrow>{complexity}</RightArrow>
        </div>
      </div>
    </div>
  );
}
