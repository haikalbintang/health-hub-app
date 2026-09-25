import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import RecipeCard from "@/components/RecipeCard";
import { RecipeDetailType } from "@/types/type";

const Followed = () => {
  const [showCount, setShowCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: recipes, isLoading } =
    useFetch<RecipeDetailType[]>("/feeds/recipes/all");

  const filteredRecipes = (recipes ?? []).filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="item-list">
      <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">
        All Recipes
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
  );
};

export default Followed;
