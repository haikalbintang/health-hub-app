import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import RecipeCard from "@/components/RecipeCard";
import { RecipeDetailType } from "@/types/type";
import Image from "next/image";
import Magnifier from "@/components-v1/images/svg/icons8-magnifier.svg";

const categories = [
  "Healthy Recipes",
  "Appetizers",
  "Main Dishes",
  "Desserts",
  "Beverages",
  "Side Dishes",
];

const Followed = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

  const [showCount, setShowCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetch<RecipeDetailType[]>("/feeds/recipes/all");
  console.log("RECIPES", recipes);
  console.log("ERROR", error);

  const handleCategoryClick = (category: string) => {
    setSelectedMenu(category);
  };
  const filteredRecipes = (recipes ?? []).filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      {/* <div className="flex items-center justify-between w-full">
        <div className="flex flex-wrap gap-1 lg:gap-3 xl:gap-4 w-full">
          {categories.map((category) => (
            <Button
              key={category}
              className={`category px-3 py-1 hover:bg-orange-200 text-gray-800 bg-orange-100 rounded-xl ${
                selectedMenu === category
                  ? "bg-slate-700 rounded-xl shadow-sm text-gray-900 shadow-slate-900"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative flex">
          <input
            type="search"
            className="border-gray-800 border-2 rounded-md p-2 text-sm w-64"
            placeholder="Search Recipe Here"
          />
          <Image
            height={24}
            width={24}
            src={Magnifier.src}
            alt=""
            className="absolute right-2 top-2 "
          />
        </div>
      </div> */}
      <div className="item-list">
        <h2 className="text-gray-800 text-2xl font-semibold mb-3">
          Weekly Recipes
        </h2>

        <input
          type="search"
          className="border-2 border-slate-400 rounded-lg p-3 mb-4"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {isLoading && <p className="text-gray-500">Loading recipes...</p>}

        <ul className="flex flex-wrap justify-around items-center my-3 gap-y-6">
          {filteredRecipes.slice(0, showCount).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} size="medium" />
          ))}
        </ul>

        <div className="px-10 pt-4 flex justify-end items-center gap-2">
          {showCount > 5 && (
            <Button onClick={() => setShowCount(5)} className="text-white">
              Show Less
            </Button>
          )}
          {showCount < filteredRecipes.length && (
            <Button
              onClick={() => setShowCount((prev) => prev + 5)}
              className="text-white"
            >
              Show More
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Followed;
