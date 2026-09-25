"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChefHat,
  Clock,
  ExternalLink,
  Heart,
  Leaf,
  ListOrdered,
  MapPin,
  MessageCircle,
  Salad,
  ShoppingBasket,
  Star,
  Tag,
  Users,
  Utensils,
} from "lucide-react";
import Modal from "@/features/navbar/Modal";
import { getNutriBadge } from "@/utils/nutriScore";
import { RecipeDetailType } from "@/types/type";

function MetaChip({
  icon: Icon,
  label,
}: {
  icon: typeof Clock;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
      <Icon size={15} className="text-orange-500" />
      {label}
    </span>
  );
}

export default function RecipeModal({
  recipe,
  onClose,
}: {
  recipe: RecipeDetailType;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const nutri = getNutriBadge(recipe.nutriscore);
  const rating = Number(recipe.rating);
  const ratingLabel = Number.isNaN(rating) ? "—" : rating.toFixed(1);
  const ingredientCount = recipe.ingredients_count;
  const stepCount = (recipe.instruction ?? "")
    .split(/\n+/)
    .map((step) => step.trim())
    .filter(Boolean).length;

  const meta = [
    { icon: ChefHat, label: recipe.complexity },
    { icon: Clock, label: `${recipe.cooktime ?? 0} min` },
    { icon: Users, label: `${recipe.servings ?? 0} servings` },
    {
      icon: ShoppingBasket,
      label: `${ingredientCount} ${ingredientCount === 1 ? "ingredient" : "ingredients"}`,
    },
    {
      icon: ListOrdered,
      label: `${stepCount} ${stepCount === 1 ? "step" : "steps"}`,
    },
    { icon: Salad, label: recipe.budget },
    { icon: Tag, label: recipe.type },
    { icon: MapPin, label: recipe.origin },
  ].filter((item) => Boolean(item.label));

  return (
    <Modal setShowModal={() => onClose()}>
      <div className="flex max-h-[90vh] w-[min(90vw,52rem)] flex-col overflow-hidden rounded-xl md:flex-row">
        {/* Image */}
        <div className="relative aspect-square w-full shrink-0 bg-gray-200 md:w-[40%] md:aspect-auto md:min-h-[28rem]">
          {recipe.attachment ? (
            <Image
              fill
              src={recipe.attachment}
              alt={recipe.title}
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Utensils size={48} className="text-gray-400" />
            </div>
          )}

          {recipe.is_chef_recipe && (
            <span className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow">
              <ChefHat size={12} strokeWidth={2.5} />
              Chef&apos;s pick
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-4 overflow-y-auto p-6 md:w-[60%] md:pr-12">
          <h1 className="text-3xl font-bold leading-tight text-slate-900">
            <span>{recipe.title} </span>
            <span
              title={`Nutri Score ${recipe.nutriscore}`}
              className={`${nutri.color} ml-2 mb-2 inline-flex items-center gap-1 rounded-full px-3 py-0.5 align-middle text-lg font-bold text-white`}
            >
              <Leaf size={18} strokeWidth={2.5} />
              {nutri.letter}
            </span>
          </h1>

          {/* Author + stats */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-base font-semibold text-slate-600">
              by <span className="text-orange-500">{recipe.author_name}</span>
            </span>
            <span className="flex items-center gap-3 text-base font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Star size={18} className="fill-amber-400 text-amber-400" />
                {ratingLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Heart size={18} className="fill-rose-500 text-rose-500" />
                {recipe.like_count ?? 0}
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle
                  size={18}
                  className="fill-blue-500 text-blue-500"
                />
                {recipe.comments?.length ?? 0}
              </span>
            </span>
          </div>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center gap-2">
            {meta.map(({ icon, label }) => (
              <MetaChip key={label} icon={icon} label={label} />
            ))}
          </div>

          {/* Description */}
          <p className="line-clamp-4 text-base leading-relaxed text-gray-800">
            {recipe.description}
          </p>

          {/* Footer actions */}
          <div className="mt-auto flex items-center justify-end border-t border-slate-200 pt-4">
            <Link
              href={`/recipe-detail/${recipe.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              See Recipe Detail
              <ExternalLink size={17} />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
