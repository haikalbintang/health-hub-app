"use client";
import React, { useState } from "react";
import logo1 from "../images/cookingtools/spatula-svgrepo-com.svg";

import MainDishes_vmhb from "./MainDishes_vmhb";
import Appetizers_vmhb from "./Appetizers_vmhb";
import Desserts_vmhb from "./Desserts_vmhb";
import Beverages_vmhb from "./Beverages_vmhb";
import SideDishes_vmhb from "./SideDishes_vmhb";
import WeeklyRecipes_vmhb from "./WeeklyRecipes_vmhb";
import HealthyRecipes_vmhb from "./HealthyRecipes_vmhb";

import HomeLogo from "../images/sidebarlogo/home-svgrepo-com.svg";
import MyRecipeLogo from "../images/sidebarlogo/notes-svgrepo-com.svg";
import FollowedRecipesLogo from "../images/sidebarlogo/follower-svgrepo-com.svg";
import MyFavoriteRecipesLogo from "../images/sidebarlogo/love-letter-note-svgrepo-com.svg";
import NutritionsLogo from "../images/sidebarlogo/nutrition-svgrepo-com.svg";
import CategoriesLogo from "../images/sidebarlogo/category-svgrepo-com.svg";
import OriginsLogo from "../images/sidebarlogo/country-direction-location-map-navigation-pin-svgrepo-com.svg";

import Magnifier from "../images/svg/icons8-magnifier.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
// import WeeklyRecipes from "../RecipesFeeds/";
// import AllRecipes from "../RecipesFeeds/AllRecipes";
const categories = [
  "Healthy Recipes",
  "Appetizers",
  "Main Dishes",
  "Desserts",
  "Beverages",
  "Side Dishes",
];

const sideBarCategories = [
  { name: "Home", image: HomeLogo.src },
  { name: "My Recipe", image: MyRecipeLogo.src },
  { name: "Followed", image: FollowedRecipesLogo.src },
  { name: "Favorite", image: MyFavoriteRecipesLogo.src },
  { name: "Nutritions", image: NutritionsLogo.src },
  { name: "Categories", image: CategoriesLogo.src },
  { name: "Origins", image: OriginsLogo.src },
];

const RecipeFeeds = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex relative w-full sm:justify-around my-8">
      {/* Sidebar */}

      {/* {isSidebarOpen && (
        <div className="sm:hidden sm:static flex-col items-center p-5 pl-0 pt-0">
          <div className="flex flex-col justify-center items-start p-4 bg-orange-100 rounded-lg shadow-sm shadow-slate-500 gap-2 lg:gap-5">
            {sideBarCategories.map((sideBarCategory) => (
              <div
                key={sideBarCategory.name}
                className={`sideBarCategories flex w-full rounded-lg gap-3 justify-start items-center p-2 xl:p-3 cursor-pointer hover:bg-slate-200 ${
                  selectedCategory === sideBarCategory.name
                    ? "bg-slate-200 shadow-sm shadow-slate-500 font-medium text-slate-800"
                    : ""
                }`}
                onClick={() => handleCategoryClick(sideBarCategory.name)}
              >
                <img src={sideBarCategory.image} alt="" className="h-6 w-6" />
                <h2 className="text-slate-700 text-sm xl:text-base">
                  {sideBarCategory.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )} */}

      <aside className="w-52 flex flex-col justify-start items-start p-4 bg-orange-100 rounded-xl gap-2 lg:gap-4 h-fit">
        {sideBarCategories.map((sideBarCategory) => (
          <div
            key={sideBarCategory.name}
            className={`flex w-full rounded-lg gap-3 justify-start items-center p-2 pr-0 cursor-pointer hover:bg-orange-200 ${
              selectedCategory === sideBarCategory.name
                ? "bg-orange-200 font-semibold text-gray-900"
                : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick(sideBarCategory.name)}
          >
            <Image height={20} width={20} src={sideBarCategory.image} alt="" />
            <div className="text-gray-900 text-sm xl:text-base">
              {sideBarCategory.name}
            </div>
          </div>
        ))}
      </aside>

      {/* Main side */}
      <main className="w-full flex flex-col pl-8">
        {/* Title and kebab button */}

        <SectionTitle>Discover Recipes</SectionTitle>

        {/* Category tags */}
        <div className="flex mt-6 items-center justify-between w-full">
          <div className="flex flex-wrap gap-1 lg:gap-3 xl:gap-4 w-full">
            {categories.map((category) => (
              <Button
                key={category}
                className={`category px-3 py-1 hover:bg-orange-200 text-gray-800 bg-orange-100 rounded-xl ${
                  selectedCategory === category
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
        </div>

        {selectedCategory === "Home" && (
          <WeeklyRecipes_vmhb recipeCategoryName="" />
        )}
        {/* {selectedCategory === "Healthy Recipes" && (
            <HealthyRecipes_vmhb recipeCategoryName="Healthy Recipes" />
          )}
          {selectedCategory === "Appetizers" && <Appetizers_vmhb />}
          {selectedCategory === "Main Dishes" && <MainDishes_vmhb />}
          {selectedCategory === "Desserts" && <Desserts_vmhb />}
          {selectedCategory === "Beverages" && <Beverages_vmhb />}
          {selectedCategory === "Side Dishes" && <SideDishes_vmhb />} */}
      </main>
    </div>
  );
};

export default RecipeFeeds;
