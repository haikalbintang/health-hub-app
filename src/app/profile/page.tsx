"use client";

import React, { useState } from "react";
import MyProfile from "@/features/user-profile/MyProfile";
import MyRecipe from "@/features/user-profile/MyRecipe";
import LikedRecipes from "@/features/user-profile/LikedRecipes";
import Security from "@/features/user-profile/Security";
import CreateRecipe from "@/features/user-profile/CreateRecipe";
import Logout from "@/features/user-profile/Logout";
import SectionTitle from "@/components/SectionTitle";
import {
  User,
  Utensils,
  Heart,
  PlusCircle,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const categories = [
  { label: "Profile", icon: User },
  { label: "Notifications", icon: Utensils },
  { label: "Saved Recipes", icon: Heart },
  { label: "Create Recipe", icon: PlusCircle },
  { label: "Security", icon: ShieldCheck },
  { label: "Logout", icon: LogOut },
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
        <aside className="w-48 shrink-0 flex flex-col justify-start items-start p-3 bg-orange-100 rounded-xl gap-2 lg:gap-3 h-fit">
          {categories.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={`flex w-full rounded-lg gap-3 justify-start items-center py-2 pl-4 cursor-pointer hover:bg-orange-200 ${
                selectedMenu === label
                  ? "bg-orange-200 font-semibold text-gray-900"
                  : "text-gray-700"
              }`}
              onClick={() => handleCategoryClick(label)}
            >
              <Icon size={18} className="shrink-0 text-orange-500" />
              <div className="text-gray-900 text-sm xl:text-base">{label}</div>
            </div>
          ))}
        </aside>

        <div className="w-full flex flex-col pl-10">
          {selectedMenu === "Profile" && <MyProfile />}
          {selectedMenu === "Notifications" && <MyRecipe />}
          {selectedMenu === "Saved Recipes" && <LikedRecipes />}
          {selectedMenu === "Create Recipe" && <CreateRecipe />}
          {selectedMenu === "Security" && <Security />}
          {selectedMenu === "Logout" && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
