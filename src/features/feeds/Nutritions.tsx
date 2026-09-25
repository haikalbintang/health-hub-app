import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import RecipeCard from "@/components/RecipeCard";
import { Leaf } from "lucide-react";
import { getNutriBadge, BADGE_COLORS, NUTRI_LETTERS } from "@/utils/nutriScore";
import { RecipeDetailType } from "@/types/type";

type SelectedBadge = (typeof NUTRI_LETTERS)[number] | "All";

const Nutritions: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<SelectedBadge>("All");
  const [showCount, setShowCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: recipes, isLoading } =
    useFetch<RecipeDetailType[]>("/feeds/recipes/all");

  const filteredRecipes = (recipes ?? []).filter((recipe) => {
    const matchesBadge =
      selectedBadge === "All" ||
      getNutriBadge(recipe.nutriscore).letter === selectedBadge;
    return (
      matchesBadge &&
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 5);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(5, prevCount - 5));
  };

  return (
    <div className="item-list">
      <h2 className="text-gray-800 text-2xl font-semibold mb-3">Nutritions</h2>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setSelectedBadge("All")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            selectedBadge === "All"
              ? "bg-slate-800 text-white"
              : "border border-stone-300 text-stone-600 hover:border-slate-800"
          }`}
        >
          All
        </button>
        {NUTRI_LETTERS.map((letter) => {
          const isActive = selectedBadge === letter;
          return (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedBadge(letter)}
              title={`Nutri Score ${letter}`}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold text-white shadow transition-transform ${BADGE_COLORS[letter]} ${
                isActive
                  ? "scale-105 ring-2 ring-slate-800 ring-offset-2"
                  : "hover:scale-105"
              }`}
            >
              <Leaf size={13} strokeWidth={2.5} />
              {letter}
            </button>
          );
        })}
      </div>

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

      <ul className="mt-4 items-center grid grid-cols-5 gap-y-6 gap-x-9">
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

export default Nutritions;
