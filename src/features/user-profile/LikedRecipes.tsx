import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { RecipeDetailType } from "@/types/type";

const LikedRecipes: React.FC = () => {
  const [showCount, setShowCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: recipes } = useFetch<RecipeDetailType[]>(
    "/collection/recipes/liked",
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Liked Recipes</h1>
        <input
          type="search"
          className="border-2 border-slate-400 rounded-lg p-3"
          placeholder="Search here"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-4 gap-4 px-10 pt-4">
          {filteredRecipes.slice(0, showCount).map((recipe) => (
            <div key={recipe.id} className="rounded-xl shadow-md shadow-black">
              <img
                src={recipe.attachment}
                alt={recipe.title}
                className="rounded-t-xl"
              />
              <div className="flex flex-col gap-2 pt-2 bg-white rounded-b-xl p-5 text-center">
                <div className="flex justify-center items-center">
                  {recipe.title}
                </div>
                <div className="flex justify-around items-center gap-7">
                  <div className="flex gap-1 justify-center items-center">
                    <div>{recipe.complexity}</div>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <div>{recipe.servings}</div>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <div>{recipe.nutriscore}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    </main>
  );
};

export default LikedRecipes;
