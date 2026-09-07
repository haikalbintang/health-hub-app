import React, { useState, useEffect } from "react";
import { chefMainCard2 } from "@/data";
import { Button } from "@/components/ui/button";
import useFetchRecipe from "@/hooks/UseFetchRecipe";
import useFetchProfile from "@/hooks/useFetchProfile";
import axios from "axios";

const MyRecipe: React.FC = () => {
  const [showCount, setShowCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const { recipes, error, refetchRecipes } = useFetchRecipe();
  const { profile } = useFetchProfile();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (profile) {
      fetchRecipeByUserLogin();
    }
  }, [profile]);

  const fetchRecipeByUserLogin = async () => {
    const authToken = localStorage.getItem("access_token");
    try {
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get(
        `http://127.0.0.1:5000/feeds/recipes/${profile?.id}`,
        { headers }
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Recipes</h1>
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
          {data.map((recipe: any, index: number) => (
            <div key={index} className="rounded-xl shadow-md shadow-black">
              <img src={recipe.image} alt="" className="rounded-t-xl" />
              <div className="flex flex-col gap-2 pt-2 bg-slate-50 rounded-b-xl p-5">
                <div className="flex justify-center items-center">
                  {recipe.title}
                </div>
                <div className="flex justify-around items-center">
                  <div>{recipe.complexity}</div>
                  <div>{recipe.servings}</div>
                  <div>{recipe.nutriscore}</div>
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
          {showCount < recipes?.length && (
            <Button onClick={toggleShowMore} className="text-white">
              Show More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
