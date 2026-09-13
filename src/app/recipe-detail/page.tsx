import React from "react";
import RecipeHero from "@/features/recipe-detail/RecipeHero";
import Ingredients from "@/features/recipe-detail/Ingredients";
import Instructions from "@/features/recipe-detail/Instructions";
import CommentSections from "@/features/recipe-detail/CommentSection";
// import KitchenTools from "@/features/recipe-detail/KitchenTools";

import { recipeDetail } from "@/data";
import { cards } from "@/data/data";

import facebooksvg from "@/components/images/facebook.svg";
import tiktoksvg from "@/components/images/tiktok-fill.svg";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function RecipeDetail() {
  const {
    id,
    title,
    complexity,
    time,
    foodImage,
    servings,
    foodCategory,
    foodOrigin,
    summary,
    ingredients,
    instructions,
    tags,
    chef,
  } = recipeDetail;

  return (
    <div className="bg-orange-50/40">
      <RecipeHero
        id={id}
        title={title}
        image={foodImage}
        servings={servings}
        time={time}
        complexity={complexity}
      />

      {/* Meta strip: category / origin / score / chef, one aligned row */}
      <div className="mt-2">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>{foodCategory}</span>
            <span className="w-px h-4 bg-gray-300" />
            <span>{foodOrigin}</span>
            <span className="w-px h-4 bg-gray-300" />
            <span>
              Nutri Score{" "}
              <span className="font-semibold text-emerald-700 pl-1">9.3</span>
            </span>
          </div>

          <div className="flex items-center gap-3 pr-14">
            <Button className="hover:text-pink-700" variant="outline" size="sm">
              Save recipe
            </Button>
            <Button
              className="hover:bg-orange-200 hover:text-emerald-700"
              variant="outline"
              size="sm"
            >
              Share
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Image
              height={60}
              width={60}
              src={chef.chefImage}
              alt={chef.name}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-stone-900 leading-tight">
                {chef.name}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                {chef.socialMedia.map((social, index) => (
                  <React.Fragment key={index}>
                    <Link href={social.facebook}>
                      <Image
                        height={16}
                        width={16}
                        src={facebooksvg.src}
                        alt="Facebook"
                      />
                    </Link>
                    <Link href={social.tiktok}>
                      <Image
                        height={16}
                        width={16}
                        src={tiktoksvg.src}
                        alt="TikTok"
                      />
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <Button size="sm" className="bg-gray-900">
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <p className="text-lg leading-relaxed text-stone-700">{summary}</p>
      </div>

      {/* Ingredients (sticky) + Instructions */}
      <div className="mx-auto px-6 lg:px-10 grid lg:grid-cols-[320px_1fr] gap-24 pb-4">
        <aside className="lg:sticky lg:top-6 self-start bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-base font-semibold text-stone-900 mb-4">
            Ingredients
          </h2>
          <Ingredients ingredients={ingredients} />
        </aside>

        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-4">
            Instructions
          </h2>
          <Instructions instructions={instructions} />
        </div>
      </div>

      {/* Tags + tools */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row lg:items-center gap-6 border-t border-stone-200 mt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: any, index: number) => (
            <span
              key={index}
              className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="lg:ml-auto">{/* <KitchenTools /> */}</div>
      </div>

      {/* Comments */}
      <div className="mx-auto px-6 lg:px-10 pb-16 grid grid-cols-6">
        <div className="col-span-4">
          <CommentSections />
        </div>
        <div className="col-span-2 mt-10 p-3">
          <div className="text-lg">People also like:</div>
          <ul className="flex flex-wrap justify-around items-center my-3 gap-y-6 gap-x-2">
            {cards.slice(0, 4).map((card) => (
              <li key={card.id}>
                <Card data={card} size="medium" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
