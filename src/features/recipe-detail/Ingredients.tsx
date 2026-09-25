"use client";

import { useState } from "react";
import Image from "next/image";

const Ingredients = ({
  ingredients,
}: {
  ingredients: {
    name: string;
    ingredientImage?: string;
    quantity: string;
  }[];
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});

  const toggleIngredient = (name: string) =>
    setCheckedIngredients((prev) => ({ ...prev, [name]: !prev[name] }));

  const checkedCount = Object.values(checkedIngredients).filter(Boolean).length;

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-stone-900">Ingredients</h2>
        <button
          type="button"
          onClick={() => setCheckedIngredients({})}
          disabled={checkedCount === 0}
          className={`text-sm font-medium transition-colors ${
            checkedCount === 0
              ? "text-stone-300 cursor-not-allowed"
              : "text-orange-600 hover:text-orange-700"
          }`}
        >
          Clear all
        </button>
      </div>
      <ul className="flex flex-col divide-y divide-stone-100">
        {ingredients.map((ing) => {
          const isChecked = !!checkedIngredients[ing.name];
          return (
            <li
              key={ing.name}
              className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
            >
              <button
                type="button"
                onClick={() => toggleIngredient(ing.name)}
                aria-label={`Toggle ${ing.name}`}
                aria-pressed={isChecked}
                className={`flex items-center justify-center h-6 w-6 shrink-0 rounded-full border-2 transition-colors ${
                  isChecked
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-stone-300 text-transparent hover:border-orange-500"
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {ing.ingredientImage ? (
                <Image
                  src={ing.ingredientImage}
                  alt=""
                  height={32}
                  width={32}
                  className="rounded-full object-cover shrink-0 bg-stone-100"
                />
              ) : (
                <span
                  className={`flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold ${
                    isChecked ? "opacity-50" : ""
                  }`}
                >
                  {ing.name.charAt(0).toUpperCase()}
                </span>
              )}
              <span
                className={`text-sm flex-1 ${
                  isChecked ? "text-stone-400 line-through" : "text-stone-800"
                }`}
              >
                {ing.name}
              </span>
              <span
                className={`text-sm font-semibold ${
                  isChecked ? "text-stone-400 line-through" : "text-stone-500"
                }`}
              >
                {ing.quantity}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Ingredients;
