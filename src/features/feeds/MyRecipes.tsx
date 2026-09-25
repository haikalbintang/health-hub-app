import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import RecipeCard from "@/components/RecipeCard";
import { RecipeDetailType } from "@/types/type";

interface Props {
  recipeCategoryName?: string;
  //   recipeCategoryType: string;
}
const MyRecipes: React.FC<Props> = ({
  //   recipeCategoryType,
  recipeCategoryName,
}) => {
  const [showCount, setShowCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: recipes, isLoading } = useFetch<RecipeDetailType[]>(
    "/collection/recipes/self-created",
  );

  const filteredRecipes = (recipes ?? []).filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 4);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(4, prevCount - 4));
  };

  return (
    <div className="item-list">
      <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">
        My Recipe
      </h2>

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

      <ul className="flex flex-wrap justify-around items-center my-3">
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

export default MyRecipes;