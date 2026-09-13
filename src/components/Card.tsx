"use client";

import { useState } from "react";
import Image from "next/image";
import clocksvg from "@/components/images/clock-lines-svgrepo-com.svg";
import Link from "next/link";

interface RecipeType {
  id: number;
  title: string;
  complexity: string;
  time: string;
  foodImage: string;
  role: string;
  nutriScore: number;
  description: string;
}

const nutriScoreStyles: Record<number, { letter: string; color: string }> = {
  10: { letter: "A", color: "bg-emerald-600" },
  9: { letter: "B", color: "bg-lime-500" },
  8: { letter: "C", color: "bg-amber-500" },
  7: { letter: "D", color: "bg-orange-500" },
  6: { letter: "E", color: "bg-rose-600" },
};

const complexityStyles: Record<string, string> = {
  Easy: "bg-emerald-500",
  Medium: "bg-amber-500",
  Hard: "bg-rose-500",
};

const sizeChart = {
  big: {
    width: "w-52",
    height: "h-80",
    picWidth: "208px",
  },
  medium: {
    width: "w-48",
    height: "h-[19rem]",
    picWidth: "192px",
  },
};

export default function Card({
  data,
  onSeeRecipe,
  size = "big",
}: {
  data: RecipeType;
  onSeeRecipe?: (id: number) => void;
  size?: "big" | "medium";
}) {
  const {
    id,
    title,
    complexity,
    time,
    foodImage,
    role,
    nutriScore,
    description,
  } = data;
  const badgeColor = complexityStyles[complexity] ?? "bg-gray-500";
  const nutri = nutriScoreStyles[Math.floor(nutriScore)] ?? {
    letter: "?",
    color: "bg-gray-500",
  };

  // const [isLeaving, setIsLeaving] = useState(false);
  let isLeaving;

  // const handleSeeRecipe = () => {
  //   setIsLeaving(true);
  //   window.setTimeout(() => onSeeRecipe(id), 350); // match the exit duration below
  // };

  return (
    <li
      key={id}
      className={`group/card relative ${sizeChart[size].height} ${sizeChart[size].width} overflow-hidden rounded-xl text-center transition-all duration-[350ms] ease-in ${
        isLeaving ? "-translate-y-8 scale-95 opacity-0" : "sm:hover:scale-105"
      }`}
    >
      {/* Button strip — sits underneath, revealed as the image shrinks */}
      <div className="absolute flex-col inset-x-0 bottom-0 flex h-32 items-center justify-center rounded-b-xl bg-gradient-to-t from-gray-900 to-black">
        <p className="text-white text-xs mb-3">{description}</p>
        <Link
          href={`/recipe-detail/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:scale-105"
        >
          See Recipe
        </Link>
      </div>

      {/* Image + content layer — shrinks from full card height (h-80) down to a
          square (h-52, same value as w-52) on hover/focus, so the square source
          image ends up displayed at its native aspect ratio with no cropping */}
      <div
        className={`absolute inset-x-0 top-0 ${sizeChart[size].height} overflow-hidden rounded-t-xl transition-[height] duration-300 ease-out sm:group-hover/card:h-48`}
      >
        <Image
          fill
          src={foodImage}
          alt={title}
          sizes={sizeChart[size].picWidth}
          className="object-cover"
        />

        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Chef ring — outlines the photo itself, so it shrinks along with it */}
        {/* {role === "chef" && (
          <div className="pointer-events-none absolute inset-0 ring-2 ring-amber-400/80" />
        )} */}

        {/* Title */}
        <h3
          className={`absolute inset-x-3 bottom-14 z-10 text-center text-lg font-bold leading-tight text-white`}
        >
          {title}
        </h3>

        {/* Footer badges */}
        <div
          className={`absolute inset-x-3 z-10 bottom-3 flex items-center justify-between`}
        >
          <span
            className={`${badgeColor} rounded-full px-2.5 py-1 text-xs font-medium text-white`}
          >
            {complexity}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-gray-800/90 px-2.5 py-1 text-xs font-medium text-white">
            <Image
              src={clocksvg.src}
              alt=""
              width={14}
              height={14}
              className="opacity-80"
            />
            {time}
          </span>
        </div>
      </div>

      {/* Fixed badge layer — pinned to the card itself, independent of the
          image container above, so these never move when it shrinks */}
      <span
        className={`${nutri.color} absolute left-2 top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shadow`}
      >
        {nutriScore}
      </span>

      {role === "chef" && (
        <span className="absolute right-2 top-2 z-20 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow">
          Chef&apos;s pick
        </span>
      )}
    </li>
  );
}
