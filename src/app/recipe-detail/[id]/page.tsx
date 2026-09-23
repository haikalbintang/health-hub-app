import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { Facebook, Instagram, Music2 } from "lucide-react";

import RecipeHero from "@/features/recipe-detail/RecipeHero";
import Ingredients from "@/features/recipe-detail/Ingredients";
import Instructions from "@/features/recipe-detail/Instructions";
import CommentSections from "@/features/recipe-detail/CommentSection";
import SaveRecipeButton from "@/features/recipe-detail/SaveRecipeButton";

import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { cards } from "@/data/data";

import { API_BASE_URL } from "@/utils/constant";
import { RecipeDetailType } from "@/types/type";

import authorAvatar from "@/components/images/Bintang.jpeg";

async function getRecipeDetail(id: number): Promise<RecipeDetailType | null> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const res = await fetch(`${API_BASE_URL}/recipes/details/${id}`, {
    headers: accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : undefined,
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return null;
  return res.json();
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const recipe = await getRecipeDetail(id);

  if (!recipe) notFound();

  const ingredients = recipe.ingredients.map(([name, quantity]) => ({
    name,
    quantity,
  }));

  const instructions = recipe.instruction
    .split(/\n+/)
    .map((step) => step.trim())
    .filter(Boolean);

  return (
    <div className="bg-orange-50/40">
      <RecipeHero
        id={recipe.id}
        title={recipe.title}
        image={recipe.attachment}
        servings={recipe.servings}
        time={String(recipe.cooktime)}
        complexity={recipe.complexity}
      />

      {/* Meta strip: category / origin / score / chef, one aligned row */}
      <div className="mt-2">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>{recipe.categories[0]}</span>
            <span className="w-px h-4 bg-gray-300" />
            <span>{recipe.origin}</span>
            <span className="w-px h-4 bg-gray-300" />
            <span>
              Nutri Score{" "}
              <span className="font-semibold text-emerald-700 pl-1">
                {recipe.nutriscore}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 pr-14">
            <SaveRecipeButton
              recipeId={recipe.id}
              initialLiked={recipe.is_liked}
            />
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
              src={authorAvatar}
              alt={recipe.author_name}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-stone-900 leading-tight">
                {recipe.author_name}
              </span>
              <div className="flex items-center gap-2 mt-0.5 text-stone-500">
                {recipe.author_facebook && (
                  <Link
                    href={recipe.author_facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={16} />
                  </Link>
                )}
                {recipe.author_instagram && (
                  <Link
                    href={recipe.author_instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={16} />
                  </Link>
                )}
                {recipe.author_tiktok && (
                  <Link
                    href={recipe.author_tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 size={16} />
                  </Link>
                )}
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
        <p className="text-lg leading-relaxed text-stone-700">
          {recipe.description}
        </p>
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
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className="mx-auto px-6 lg:px-10 pb-16 grid grid-cols-6">
        <div className="col-span-4">
          <CommentSections recipeId={recipe.id} comments={recipe.comments} />
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