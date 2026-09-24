"use client";

import React, { useState } from "react";
import MyProfile from "@/features/user-profile/MyProfile";
import MyRecipe from "@/features/user-profile/MyRecipe";
import LikedRecipes from "@/features/user-profile/LikedRecipes";
import Security from "@/features/user-profile/Security";
import CreateRecipe from "@/features/user-profile/CreateRecipe";
import Logout from "@/features/user-profile/Logout";
import SectionTitle from "@/components/SectionTitle";

const categories = [
  "Profile",
  "My Recipe",
  "Liked Recipes",
  "Create Recipe",
  "Security",
  "Logout",
];

const MyProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Profile");

  const handleCategoryClick = (category: string) => {
    setSelectedMenu(category);
  };

  return (
    <div className="mt-4">
      <SectionTitle>Profile</SectionTitle>
      <div className="flex py-5 mt-0">
        <aside className="w-44 flex flex-col justify-start items-start p-2 bg-orange-100 rounded-xl gap-2 lg:gap-2 h-fit">
          {categories.map((category) => (
            <div
              key={category}
              className={`flex w-full rounded-lg gap-3 justify-start items-center py-2 px-4 cursor-pointer hover:bg-orange-200 ${
                selectedMenu === category
                  ? "bg-orange-200 font-semibold text-gray-900"
                  : "text-gray-700"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {/* <Image height={20} width={20} src={sideBarCategory.image} alt="" /> */}
              <div className="text-gray-900 text-sm xl:text-base">
                {category}
              </div>
            </div>
          ))}
        </aside>

        <div className="mx-auto">
          {selectedMenu === "Profile" && <MyProfile />}
          {selectedMenu === "My Recipes" && <MyRecipe />}
          {selectedMenu === "Liked Recipes" && <LikedRecipes />}
          {selectedMenu === "Create Recipe" && <CreateRecipe />}
          {selectedMenu === "Security" && <Security />}
          {selectedMenu === "Logout" && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
