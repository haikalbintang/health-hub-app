import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { chefMainCard, chefMainCard2 } from "@/data";

const Appetizers: React.FC = () => {
  const [showCount, setShowCount] = useState(4);

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 4);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(4, prevCount - 4));
  };

  return (
    <div className="item-list">
      <h2>Appetizers</h2>
      <div className=" pr-16 ">
        {chefMainCard2[0].recipe.map((recipeCategory, index) => (
          <div className="grid grid-cols-4 gap-4 px-10  pt-4 " key={index}>
            {recipeCategory.category.Appetizers.slice(0, showCount).map(
              (recipe, recipeIndex) => (
                <div
                  key={recipeIndex}
                  className="rounded-xl shadow-md shadow-black"
                >
                  <img src={recipe.image} alt="" className="rounded-t-xl " />
                  <div className="flex flex-col gap-2 pt-2 bg-slate-400 rounded-b-xl p-5">
                    <div className="flex justify-center items-center">
                      {recipe.recipeName}
                    </div>
                    <div className="flex justify-around items-center">
                      <div>{recipe.difficulty}</div>
                      <div>{recipe.servings}</div>
                      <div>{recipe.nutriScore}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
        <div className="px-10 pt-4 flex justify-end items-center gap-2">
          {showCount > 4 && (
            <Button onClick={toggleShowLess} className="text-white">
              Show Less
            </Button>
          )}
          {showCount <
            chefMainCard2[0].recipe[0].category.Appetizers.length && (
            <Button onClick={toggleShowMore} className="text-white">
              Show More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appetizers;
