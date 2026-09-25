"use client";

import { useState } from "react";
import Image from "next/image";
import { ChefHat, Eye, Heart, Leaf, Star } from "lucide-react";
import RecipeModal from "@/components/RecipeModal";
import { getNutriBadge } from "@/utils/nutriScore";
import { RecipeDetailType } from "@/types/type";

const sizeChart = {
  big: {
    width: "w-52",
    picWidth: "208px",
  },
  medium: {
    width: "w-48",
    picWidth: "192px",
  },
};

export default function RecipeCard({
  recipe,
  size = "big",
}: {
  recipe: RecipeDetailType;
  size?: "big" | "medium";
}) {
  const {
    id,
    title,
    attachment,
    description,
    nutriscore,
    author_name,
    rating,
    like_count,
  } = recipe;
  const nutri = getNutriBadge(nutriscore);
  const ratingValue = Number(rating);
  const ratingLabel = Number.isNaN(ratingValue) ? "—" : ratingValue.toFixed(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li
        key={id}
        className={`group/card relative ${sizeChart[size].width} overflow-hidden rounded-xl bg-orange-100 text-left shadow-md transition-all duration-200 ease-in sm:hover:shadow-xl`}
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="block w-full cursor-pointer text-left"
        >
          {/* Square image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              fill
              src={attachment}
              alt={title}
              sizes={sizeChart[size].picWidth}
              className="object-cover transition-transform duration-300 sm:group-hover/card:scale-105"
            />

            {/* Scrim for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-white/10 to-transparent" />

            {/* Hover affordance */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 sm:group-hover/card:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                <Eye size={16} />
                Quick View
              </span>
            </div>

            {/* Title */}
            <h3 className="absolute bottom-3 left-3 z-10 line-clamp-2 pr-3 text-base font-bold leading-tight text-white drop-shadow-sm">
              {title}
            </h3>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="min-w-0 truncate text-xs text-gray-700 font-medium">
                by{" "}
                <span className="text-xs font-semibold text-orange-500">
                  {author_name}
                </span>
              </p>
              <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-stone-500">
                <span className="flex items-center gap-0.5">
                  <Heart size={13} className="fill-rose-500 text-rose-500" />
                  {like_count ?? 0}
                </span>
                <span className="flex items-center gap-0.5">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  {ratingLabel}
                </span>
              </span>
            </div>
            <p className="line-clamp-3 text-xs leading-relaxed text-gray-800">
              {description}
            </p>
          </div>
        </button>

        {/* Fixed badges */}
        <span
          title={`Nutri Score ${nutriscore}`}
          className={`${nutri.color} absolute left-2 top-2 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold text-white shadow ring-1 ring-black/20`}
        >
          <Leaf size={12} strokeWidth={2.5} />
          {nutri.letter}
        </span>

        {recipe.is_chef_recipe && (
          <span className="absolute right-2 top-2.5 flex items-center gap-1 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow">
            <ChefHat size={12} strokeWidth={2.5} />
            Chef&apos;s pick
          </span>
        )}
      </li>

      {isModalOpen && (
        <RecipeModal recipe={recipe} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
