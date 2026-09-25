"use client";

import AllUsers from "@/features/people/AllUsers";
import Chefs from "@/features/people/Chefs";
import Following from "@/features/people/Following";
import Followers from "@/features/people/Followers";
import SectionTitle from "@/components/SectionTitle";
import { ChefHat, UserCheck, UserPlus, Users } from "lucide-react";
import React, { useState } from "react";

const sideBarCategories = [
  { name: "All", icon: Users },
  { name: "Chefs", icon: ChefHat },
  { name: "Following", icon: UserPlus },
  { name: "Followers", icon: UserCheck },
];

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("All");

  const handleCategoryClick = (category: string) => {
    setSelectedMenu(category);
  };
  return (
    <div className="mt-4">
      <SectionTitle>Discover People</SectionTitle>
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

        <main className="w-full flex flex-col pl-10">
          {selectedMenu === "All" && <AllUsers />}
          {selectedMenu === "Chefs" && <Chefs />}
          {selectedMenu === "Following" && <Following />}
          {selectedMenu === "Followers" && <Followers />}
        </main>
      </div>
    </div>
  );
};

export default Page;
