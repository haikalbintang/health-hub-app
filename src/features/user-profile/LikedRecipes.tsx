import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { RecipeDetailType } from "@/types/type";
import RecipeCard from "@/components/RecipeCard";

const LikedRecipes: React.FC = () => {
  const [showCount, setShowCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: recipes, isLoading } = useFetch<RecipeDetailType[]>(
    "/collection/recipes/liked",
  );

  const filteredRecipes = (recipes ?? []).filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 5);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(5, prevCount - 5));
  };

  return (
    <div className="item-list">
      <h2 className="text-gray-800 text-2xl font-semibold mb-3">Saved</h2>

      <div className="flex justify-between items-center mb-4">
        <input
          type="search"
          className="border-2 border-slate-400 rounded-lg p-3"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isLoading && <p className="text-gray-500">Loading recipes...</p>}

      <ul className="justify-around items-center my-3 grid grid-cols-5">
        {filteredRecipes.slice(0, showCount).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} size="medium" />
        ))}
      </ul>

      <div className="px-10 pt-4 flex justify-end items-center gap-2">
        {showCount > 4 && (
          <Button onClick={toggleShowLess} className="text-white">
            Show Less
          </Button>
        )}
        {showCount < filteredRecipes.length && (
          <Button onClick={toggleShowMore} className="text-white">
            Show More
          </Button>
        )}
      </div>
    </div>
  );
};

export default LikedRecipes;
