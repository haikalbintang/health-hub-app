"use client";
import React, { useState } from "react";

import WeeklyRecipes from "@/features/feeds/WeeklyRecipes";

import Magnifier from "@/components-v1/images/svg/icons8-magnifier.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import MyRecipes from "@/features/feeds/MyRecipes";
import Followed from "@/features/feeds/Followed";
import Favorite from "@/features/feeds/Favorite";
import Nutritions from "@/features/feeds/Nutritions";
import Categories from "@/features/feeds/Categories";
import Origins from "@/features/feeds/Origins";
import {
  Home,
  Utensils,
  UserPlus,
  Heart,
  Salad,
  LayoutGrid,
  MapPin,
} from "lucide-react";

const categories = [
  "Healthy Recipes",
  "Appetizers",
  "Main Dishes",
  "Desserts",
  "Beverages",
  "Side Dishes",
];

const sideBarCategories = [
  { name: "Home", icon: Home },
  { name: "My Recipe", icon: Utensils },
  { name: "Followed", icon: UserPlus },
  { name: "Favorite", icon: Heart },
  { name: "Nutritions", icon: Salad },
  { name: "Categories", icon: LayoutGrid },
  { name: "Origins", icon: MapPin },
];

const RecipeFeeds = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

  const handleCategoryClick = (category: string) => {
    setSelectedMenu(category);
  };

  return (
    <div className="mt-4">
      <SectionTitle>Discover Recipes</SectionTitle>
      <div className="flex relative w-full sm:justify-around mb-8 mt-5">
        {/* Sidebar */}
        <aside className="w-52 flex flex-col justify-start items-start p-3 bg-orange-100 rounded-xl gap-2 lg:gap-3 h-fit">
          {sideBarCategories.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className={`flex w-full rounded-lg gap-3 justify-start items-center py-2 px-4 cursor-pointer hover:bg-orange-200 ${
                selectedMenu === name
                  ? "bg-orange-200 font-semibold text-gray-900"
                  : "text-gray-700"
              }`}
              onClick={() => handleCategoryClick(name)}
            >
              <Icon size={18} className="shrink-0 text-orange-500" />
              <div className="text-gray-900 text-sm xl:text-base">{name}</div>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="w-full flex flex-col pl-8">
          <div className="flex items-center justify-between w-full">
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
          </div>

          {selectedMenu === "Home" && <WeeklyRecipes recipeCategoryName="" />}
          {selectedMenu === "My Recipe" && <MyRecipes />}
          {selectedMenu === "Followed" && <Followed />}
          {selectedMenu === "Favorite" && <Favorite />}
          {selectedMenu === "Nutritions" && <Nutritions />}
          {selectedMenu === "Categories" && <Categories />}
          {selectedMenu === "Origins" && <Origins />}
        </main>
      </div>
    </div>
  );
};

export default RecipeFeeds;
