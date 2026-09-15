"use client";

import React, { useState } from "react";
import MyProfile from "@/features/user-profile/MyProfile";
import MyRecipe from "@/features/user-profile/MyRecipe";
import Security from "@/features/user-profile/Security";
import CreateRecipe from "@/features/user-profile/CreateRecipe";
import Logout from "@/features/user-profile/Logout";

const categories = [
  "My Profile",
  "My Recipe",
  "Create Recipe",
  "Security",
  "Logout",
];

const MyProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("My Profile");

  const handleCategoryClick = (category: string) => {
    setSelectedMenu(category);
  };

  return (
    <div className="flex items-center py-5 my-auto">
      <aside className="w-52 flex flex-col justify-start items-start p-4 bg-orange-100 rounded-xl gap-2 lg:gap-4 h-fit">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex w-full rounded-lg gap-3 justify-start items-center p-2 pr-0 cursor-pointer hover:bg-orange-200 ${
              selectedMenu === category
                ? "bg-orange-200 font-semibold text-gray-900"
                : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {/* <Image height={20} width={20} src={sideBarCategory.image} alt="" /> */}
            <div className="text-gray-900 text-sm xl:text-base">{category}</div>
          </div>
        ))}
      </aside>

      <div className="w-3/5 p-5 mx-auto">
        {selectedMenu === "My Profile" && <MyProfile />}
        {selectedMenu === "My Recipe" && <MyRecipe />}
        {selectedMenu === "Create Recipe" && <CreateRecipe />}
        {selectedMenu === "Security" && <Security />}
        {selectedMenu === "Logout" && <Logout />}
      </div>
    </div>
  );
};

export default MyProfilePage;
